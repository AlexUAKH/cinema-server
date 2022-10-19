import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, ObjectId } from 'mongoose';
import { ErrorHandler } from '../errors/errorHandler';
import { Session, SessionDocument } from '../session/entities/session.entity';
import { BookTicketDto } from './dto/book-ticket.dto';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { Ticket, TicketDocument } from './entities/ticket.entity';
import { ISearchQuery } from './ticket.controller';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name)
    private ticketModel: Model<TicketDocument>,
    @InjectModel(Session.name)
    private sessionModel: Model<SessionDocument>
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const session_result = await this.sessionModel.find({});
    const session = Object.fromEntries(
      session_result.map((el) => [String(el.movie_id), JSON.parse(el.sessions)])
    );
    const response = [];

    Object.keys(session).forEach((id) => {
      session[id].forEach((show: any) => {
        let ind = 1;
        let rows = 8; //10 12
        let seats_in_row = 24; // 32 40
        show.daytime.split(';').forEach((time: string) => {
          if (ind > 3 && ind < 7) {
            rows = 10;
            seats_in_row = 32;
          }
          if (ind >= 7) {
            rows = 12;
            seats_in_row = 40;
          }
          const seats = [];
          for (let row = 0; row < rows; row++) {
            seats[row] = [];
            for (let s = 0; s < seats_in_row; s++) {
              seats[row][s] = false;
            }
          }
          ind++;

          response.push({
            movie_id: id,
            daytime: time,
            showdate: show.showdate,
            seats: JSON.stringify(seats)
          });
        });
      });
    });
    const result = [];
    const count = 100;

    for (let s = 0, e = count; s < response.length; s += count, e += count)
      result.push(response.slice(s, e));
    result.forEach(async (res) => {
      await this.ticketModel.create(res);
    });
    return result[0].length;
  }

  async findOne(searchQuery: ISearchQuery) {
    const filter = {};
    if (Object.keys(searchQuery).length < 3)
      ErrorHandler.badRequest('Search params is required');

    filter['daytime'] = searchQuery.daytime;
    filter['showdate'] = searchQuery.showdate;
    filter['movie_id'] = new mongoose.Types.ObjectId(
      String(searchQuery.movie_id)
    );

    const seanse = await this.ticketModel.findOne(filter);
    const seats = JSON.parse(seanse.seats);
    const result = {
      data: [
        ...seats.map((row: any, ind: number) => {
          return [
            {
              row: ind + 1
            },
            [
              ...row.map((seat: boolean, ind: number) => {
                return {
                  seat: ind + 1,
                  is_free: seat
                };
              })
            ]
          ];
        })
      ]
    };

    return result;
  }

  async bookPlace({ daytime, movie_id, row, seat, showdate }: BookTicketDto) {
    const filter = {};
    if (!daytime && !showdate && !movie_id)
      ErrorHandler.badRequest('Search params is required');

    filter['daytime'] = daytime;
    filter['showdate'] = showdate;
    filter['movie_id'] = new mongoose.Types.ObjectId(String(movie_id));

    const seanse = await this.ticketModel.findOne(filter);

    if (!seanse) ErrorHandler.badRequest('Something went wrong');
    const seats = JSON.parse(seanse.seats);
    if (seats[row - 1][seat - 1])
      ErrorHandler.badRequest('This seat is not available');

    seats[row - 1][seat - 1] = true;

    const updated = await this.ticketModel.findOneAndUpdate(filter, {
      movie_id,
      daytime,
      showdate,
      seats: JSON.stringify(seats)
    });

    if (!updated) ErrorHandler.badRequest('dont updated');

    const result = {
      data: {
        movie_id,
        row,
        seat,
        showdate,
        daytime,
        ticketkey: `ticket-${movie_id}-${showdate}`
      }
    };
    return result;
    //     {
    //     "data": {
    //         "movie_id": "61",
    //         "row": "9",
    //         "seat": "8",
    //         "showdate": "2021-06-27",
    //         "daytime": "10:50",
    //         "ticketkey": "2a8cfbd5a4945f52e92c6b969f440192"
    //     }
    // }
  }

  async remove(id: ObjectId) {
    const movie = await this.ticketModel.findById(id);

    if (!movie)
      ErrorHandler.notFound('The record with given id does not exist');

    return await this.ticketModel.findByIdAndDelete(id);
  }
}

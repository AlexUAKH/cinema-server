import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { BookTicketDto } from './dto/book-ticket.dto';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketService } from './ticket.service';

export interface ISearchQuery {
  movie_id: ObjectId;
  daytime: string;
  showdate: string;
}

@Controller('api/')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post('createSeats')
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get('showPlaces')
  findOne(@Query() searchQuery: ISearchQuery) {
    return this.ticketService.findOne(searchQuery);
  }

  @Post('bookPlace')
  bookPlace(@Body() bookTicketDto: BookTicketDto) {
    return this.ticketService.bookPlace(bookTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.ticketService.remove(id);
  }
}

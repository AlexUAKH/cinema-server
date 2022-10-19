import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session, SessionDocument } from './entities/session.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name)
    private sessionModel: Model<SessionDocument>
  ) {}

  async create(dto: CreateSessionDto[]) {
    const record = dto.map((el) => {
      return { ...el, sessions: JSON.stringify(el.sessions) };
    });
    return await this.sessionModel.create(record);
  }

  async findAll() {
    const result = await this.sessionModel.find({});
    const response = [
      Object.fromEntries(
        result.map((el) => [String(el.movie_id), JSON.parse(el.sessions)])
      )
    ];
    return response;
  }

  async findOne(id: ObjectId) {
    const result = await this.sessionModel.findOne({ movie_id: id });
    const response = {};
    if (result) {
      response['data'] = {
        [String(result.movie_id)]: JSON.parse(result.sessions)
      };
    }
    return response;
  }

  update(id: ObjectId, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: ObjectId) {
    return `This action removes a #${id} session`;
  }
}

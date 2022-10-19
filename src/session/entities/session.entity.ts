import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { Movie } from '../../movie/entities/movie.entity';

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @ApiProperty({
    example: '634c01b4560be10668b50b5c',
    description: 'Movie id'
  })
  @Prop({ unique: true, type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
  movie_id: Movie;

  @ApiProperty({ example: 'bla bla ba', description: 'Movies session' })
  @Prop()
  sessions: string;
}
export const SessionModel = SchemaFactory.createForClass(Session);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import { Movie } from '../../movie/entities/movie.entity';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @ApiProperty({
    example: '634c01b4560be10668b50b5c',
    description: 'Movie id'
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
  movie_id: Movie;

  @ApiProperty({ example: '10:50', description: 'Movies time' })
  @Prop()
  daytime: string;

  @ApiProperty({ example: '2021-06-27', description: 'Movies day' })
  @Prop()
  showdate: string;

  @ApiProperty({
    example: '[[false,...,false],...,[false,...,true]]',
    description: 'seats available'
  })
  @Prop()
  seats: string;
}
export const TicketModel = SchemaFactory.createForClass(Ticket);

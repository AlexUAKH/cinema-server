import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type TicketsDocument = Tickets & Document;

@Schema()
export class Tickets {
  @ApiProperty({ example: 'Jhon', description: 'Ticketss name' })
  @Prop()
  name: string;
}
export const TicketsModel = SchemaFactory.createForClass(Tickets);

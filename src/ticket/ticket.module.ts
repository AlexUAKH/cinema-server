import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionModel } from '../session/entities/session.entity';
import { Ticket, TicketModel } from './entities/ticket.entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketModel }]),
    MongooseModule.forFeature([{ name: Session.name, schema: SessionModel }])
  ],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}

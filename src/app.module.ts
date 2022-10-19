import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';
import { SessionModule } from './session/session.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    MovieModule,
    SessionModule,
    TicketModule
  ]
})
export class AppModule {}

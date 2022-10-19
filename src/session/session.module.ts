import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Session, SessionModel } from './entities/session.entity';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Session.name, schema: SessionModel }])
  ],
  controllers: [SessionController],
  providers: [SessionService]
})
export class SessionModule {}

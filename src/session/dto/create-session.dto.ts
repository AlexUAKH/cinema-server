import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateSessionDto {
  @ApiProperty({
    example: '634c01b4560be10668b50b6a',
    description: 'Movie id'
  })
  readonly movie_id: ObjectId;

  @ApiProperty({ example: '', description: 'Movie sessions' })
  readonly sessions: Array<any>;
}

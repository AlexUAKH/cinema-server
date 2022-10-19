import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateTicketDto {
  @ApiProperty({
    example: '634c01b4560be10668b50b5c',
    description: 'Movie id'
  })
  movie_id: ObjectId;

  @ApiProperty({ example: '10:50', description: 'Movies time' })
  daytime: string;

  @ApiProperty({ example: '2021-06-27', description: 'Movies day' })
  showdate: string;

  @ApiProperty({
    example: '[[false,...,false],...,[false,...,true]]',
    description: 'seats available'
  })
  seats: string;
}

import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @ApiProperty({
    example: '545rregeger5g4',
    description: 'Movie id'
  })
  readonly _id: string;
}

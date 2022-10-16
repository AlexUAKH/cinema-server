import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    example: 'Форсаж 9: Нестримна сага',
    description: 'Movie title'
  })
  readonly name: string;

  @ApiProperty({ example: 'bla bla ba', description: 'Movie description' })
  readonly description: string;

  @ApiProperty({ example: '5', description: 'Movie genre' })
  readonly genre: number;

  @ApiProperty({
    example: 'https://images.com/92356',
    description: 'Movie image'
  })
  readonly image: string;

  @ApiProperty({
    example: 'rating: 5',
    description: 'Movie additional description'
  })
  readonly additional: string;
}

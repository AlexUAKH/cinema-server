import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @ApiProperty({
    example: 'Форсаж 9: Нестримна сага',
    description: 'Movie title'
  })
  @Prop()
  name: string;

  @ApiProperty({ example: 'bla bla ba', description: 'Movie description' })
  @Prop()
  description: string;

  @ApiProperty({ example: '5', description: 'Movie genre' })
  @Prop()
  genre: number;

  @ApiProperty({
    example: 'https://images.com/92356',
    description: 'Movie image'
  })
  @Prop()
  image: string;

  @ApiProperty({
    example: 'rating: 5',
    description: 'Movie additional description'
  })
  @Prop()
  additional: string;
}
export const MovieModel = SchemaFactory.createForClass(Movie);

[
  {
    '46': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '47': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '48': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '49': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '50': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '51': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '52': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '53': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '54': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '55': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '56': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '57': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '58': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '59': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '60': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '61': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '62': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '63': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ],
    '64': [
      {
        showdate: '2021-06-27',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-28',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-29',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-06-30',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-01',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-02',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      },
      {
        showdate: '2021-07-03',
        daytime: '10:50;12:30;14:50;17:10;17:30;19:30;20:10;21:45;22:35'
      }
    ]
  }
];

[
  {
    id: 50,
    name: 'Форсаж 9: Нестримна сага',
    description:
      'За сюжетом Домінік Торетто залягає на дно та живе спокійним життям з Летті та їхнім сином Брайаном. Проте доля має на нього зовсім інші плани, адже небезпека минулих помилок завжди ховається за мирним горизонтом. Небезпечна кібертерористка Сайфер вирішує помститися Домініку за попередні невдачі та використовує для цього професійного найманого вбивцю Джейкоба (Джон Сіна), який до того ж є давно покинутим братом Торетто.&nbsp;',
    genre: 2,
    image:
      'https://multiplex.ua//images/88/7d/887d5babb06ccc836dfd144a8d2b6f2d.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2019</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">FAST &amp; THE FURIOUS 9</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">ДЖАСТІН ЛІН («Форсаж 6», «Зоряний шлях: За межами Всесвіту»)</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">11.06.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">5.3</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/crime">Кримінал</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/thriller">Трилер</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:23  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Universal</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">ВІН ДІЗЕЛЬ («Форсаж», «Хроніки Рідіка»), ШАРЛІЗ ТЕРОН («Форсаж 8», «Білосніжка і мисливець», «Прометей»), ДЖОН СІНА («Бамблбі»).</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 62,
    name: 'Трилогія братів Леман',
    description:
      'У 1844 році 23-річний Генрі Леман, син єврейського торговця худобою з Баварії, висадився на береги Сполучених Штатів з одним чемоданом в руках.&nbsp; Він оселився в маленькому містечку в штаті Алабама і відкрив магазинчик галантереї &laquo;Г.&nbsp; Леман&raquo;.&nbsp; Через кілька років до нього приєдналися брати - Еммануель і Мейер, і фірма стала називатися Lehman Brothers ... В історію світової економіки ця назва назавжди увійшла після 2008 року, коли банкрутство компанії, яка коштувала на той час сотні мільярдів доларів, призвело до грандіозного кризи, що торкнулася&nbsp; всіх і все.',
    genre: 1,
    image:
      'https://multiplex.ua//images/92/35/923564bc9b5588c79af84453ba8b271c.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2019</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">The Lehman Trilogy</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Сем Мендес</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">07.07.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська мова з українськими субтитрами</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/play">Спектакль</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t3:08  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Саймон Раселл Біл, Бен Майлз, Адам Годлі</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 58,
    name: 'Queen: live in Budapest',
    description:
      'Фільм-концерт, створений угорським режисером Яношем Жомбояї із кадрів групи під час перебування в Будапешті та запису концерту на стадіоні &laquo;Непштадіон&raquo; в 1986 році. Оскільки зірка такої величини, як ФРЕДДІ МЕРК&rsquo;ЮРІ з легендарними музикантами, вперше давали концерт у соціалістичній Угорщині, ця подія стала визначною для всієї країни. Тому на концерті працювало одночасно 14 професійних режисерів.',
    genre: 1,
    image:
      'https://multiplex.ua//images/96/c6/96c61be33c5f178b7bc4d20756c13e1b.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">1987</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Queen: live in Budapest</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val"> Янош Жомбояі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">16.07.2021</span> - 16.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">моваю оригіналу </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/concerto">Концерт</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:36  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val"> Угорщина, Канада, США</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 56,
    name: 'Дядя Ваня',
    description:
      " <li>Новий спектакль поставлений Єном Ріксон по тексту, адаптованому відмінним ірландським режисером і драматургом, лауреатом премії Олів'є Конором Макферсоном, з чуйною увагою до першоджерела і чудовою легкістю.&nbsp;Театр Гарольда Пінтера в Вест-Енді, де йшов спектакль, до 2011-го року називався Театром Комедії - і Ріксон прекрасно транслює особливий трагедійний комізм Чехова.&nbsp;На сцені зібраний чудовий акторський ансамбль.&nbsp;</li> ",
    genre: 1,
    image:
      'https://multiplex.ua//images/34/3e/343e46bba6b3fae77d8e26c0937616a8.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2020</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Uncle Vanya</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val"> Іен Ріксон</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">30.06.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">англійською мовою з українськими субтитрами </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/play">Спектакль</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:35  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Антон Чехов, Конор Макферсон</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Тобі Джонс Річард Армітедж Роджер Аллам Еймі Лу Вуд Розалінд Елізар Дірбла Моллой Пітер Уайт Анна Калдер-Маршалл</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 60,
    name: 'Чемпіонат Європи: Швеція - Україна',
    description: 'Чемпіонат Європи: Швеція - Україна',
    genre: 3,
    image:
      'https://multiplex.ua//images/99/8f/998fa780b3e9f47c18df180b9ede19c9.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">29.06.2021</span> - 29.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/football">Футбол</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t3:00  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 48,
    name: 'Чорна Вдова',
    description:
      ' <div class="conLwithR"> <div class="mycontent"> <div class="mycontent2"> <div class="clearfix"> <div class="region region-content"> <div id="block-system-main" class="block block-system"> <div class="content"> <div id="node-15657" class="node node-movie clearfix"> <div class="content"> <div id="node-movie-full-group-movie-info" class="group-movie-info field-group-div"> <div class="field field-name-body field-type-text-with-summary field-label-hidden"> <div class="field-items"> <p style="text-align: center;">Звертаємо особливу увагу, що у нашому кінотеатрі глядачам пропонується переглянути ексклюзивну версію стрічки в технології <strong>Screen X</strong> та <strong>ІМАХ.</strong>&nbsp;Творці фільму постаралися і підготували для показу на екранах<strong> ІМАХ</strong> варіант, що містить зображення на 26% більше за розміром в порівнянні зі звичайними екранами кінотеатрів. Кожен може не просто переглядати фільм, а буквально поринути в живу атмосферу фільму, оскільки замість звичного співвідношення сторін екрану 2.4:1 фільм демонструватиметься у форматі 1.9:1.</p> <p style="text-align: left;">&nbsp;</p> <p style="font-weight: 400; text-align: center;"><strong>ScreenX </strong>- це панорамний формат зображення з кутом огляду в 270 градусів. Для досягнення такого ефекту зображення проектується на центральний і два бокових екранах кінотеатру. Основні сцени фільма демонструють на головному екрані, а бічні збільшують кадрову композицію. Такий розширений простір дає змогу глядачеві опинитися реально &laquo;всередині&raquo; картини і сприймати кіно по-новому!</p> <p style="font-weight: 400; text-align: left;">&nbsp;</p> <p style="font-weight: 400;">Наташа Романова, відома як Чорна Вдова, подивиться у вічі темним сторінкам книги свого життя, коли зіткнеться із небезпечною змовою, пов&rsquo;язаною з власним минулим. Наташу переслідує небезпечна сила, яка ні перед чим не зупиниться на шляху до її знищення. Тепер вона має розібратись і зі своїм шпигунським минулим, і зі стосунками, які зруйнувала ще до того, як приєдналась до Месників.&nbsp;</p> <p style="font-weight: 400;">&nbsp;</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> ',
    genre: 0,
    image:
      'https://multiplex.ua//images/af/ed/afed45a4a5b9ec38d7b0bb6988ac93c3.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Black Widow</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Кейт Шортланд</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">07.07.2021</span> - 14.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/sci-fi">Фантастика</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/action">Екшн</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:14  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val"> Marvel Studios</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Жак Шеффер, Нед Бенсон</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Скарлетт Йоганссон («Месники», «Привид у броні», «Книга джунглів»), Девід Гарбор («Дивні дива», «Загін самогубців», «Хеллбой»), Флоренс П&#39;ю («Сонцестояння»), Рейчел Вайс («Костянтин: Володар темряви», «Спадок Борна», «Фонтан»), О. Т. Фаґбенлі </p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 54,
    name: 'Кролик Петрик: Втеча до міста',
    description:
      'Кролик Петрик та інші вухаті бешкетники повертаються! Нарешті між кроликами та їхніми сусідами встановлено мир, та скільки б зусиль Петрик не докладав, йому важко приборкати свій характер і стати слухняним. Тож він покидає затишний садок і вирушає назустріч новим пригодам і новим викликам. Люди, начувайтеся, зухвалий кролик підготував багато сюрпризів!',
    genre: 3,
    image:
      'https://multiplex.ua//images/a1/cf/a1cf825a7eb1785a7ead7203ecb61529.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2020</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Peter Rabbit 2</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Вілл Глук </p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">27.05.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">6.2</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:33  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Австралія, США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val"> Sony Pictures Entertainment</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Вілл Глук </p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Роуз Бірн, Донал Ґлісон, Джеймс Корден, Марго Роббі</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 57,
    name: 'System of a Down: сила правди',
    description:
      'Документальний фільм &laquo;System of a Down: сила правди&raquo; починається як історія гурту System of a Down. Шалена енергія музики чотирьох хлопців вірменського походження з Каліфорнії розривала чарти на початку нульових та навіть стала причиною масових заворушень в Лос-Анджелесі, коли місцева влада скасувала їхній промо-концерт.',
    genre: 1,
    image:
      'https://multiplex.ua//images/4d/4f/4d4f97b66ddd79b5d20dd77b6e0337c6.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2020</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">System of a Down: Truth to Power</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Ґарін Ованнісян</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">09.07.2021</span> - 09.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська мова з українськими субтитрами </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/documentary">Документальний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:19  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Ґарін Ованнісян</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 46,
    name: 'Тілоохоронець дружини кілера',
    description:
      'Довгоочікуване возз&rsquo;єднання зухвалої парочки, за якою всі скучили! Кілеру міжнародного рівня (Семюел Л. Джексон) і його професійному тілоохоронцю (Раян Рейнольдс) таки вдалось потоваришувати &ndash; і це було крутезно! Тепер вони об&rsquo;єднуються, щоб захистити дружину найманого вбивці (Сальма Гаєк). Продовження нестримної комедії обіцяє ще більше екшну, гумору і шикарної акторської гри. Приготуйся зустріти Антоніо Бандераса і Морґана Фрімена, які приєдналися до одного з найгучніших кінохітів цього літа!',
    genre: 3,
    image:
      'https://multiplex.ua//images/cd/f9/cdf900c6a03529d317c492e1dad90f2b.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">THE HITMAN&#39;S WIFE&#39;S BODYGUARD</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Патрік Г&#39;юз («Тілоохоронець кілера»)</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">24.06.2021</span> - 21.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">6.5</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/action">Екшн</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/comedy">Комедія</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:56  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Millennium Films</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Том О’Коннор</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Раян Рейнольдс, Семюел Л. Джексон, Сальма Хаєк, Морган Фріман, Антоніо Бандерас, Том Хоппер</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 51,
    name: 'Круелла',
    description:
      '<span style="text-decoration: underline;"><strong><span lang="UK"><em>&laquo;Фільм &laquo;Круелла&raquo; містить кілька сцен зі спалахами світла, які можуть вплинути на глядачів, схильних до фоточутливої епілепсії або мають інші фоточутливості&raquo;.</em></span></strong></span>',
    genre: 1,
    image:
      'https://multiplex.ua//images/2c/c1/2cc1e1151f8a1df72c4149be29819e2f.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">CRUELLA</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Крейґ Ґіллеспі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">27.05.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">7.4</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/comedy">Комедія</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/crime">Кримінал</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:13  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Walt Disney Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Емма Стоун («Ла-Ла Ленд»), Емма Томпсон (франшиза «Гаррі Поттер»), Марк Стронґ («Шерлок Холмс»), Пол Волтер Гаузер («Річард Джуелл»)</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 63,
    name: 'Загадкове нічне вбивство собаки',
    description:
      '<span style="font-weight: 400;">Перед 15-річним Крістофером лежить мертвий сусідський собака - його закололи вилами. На годиннику сім хвилин на першу, і хлопчик - головний підозрюваний. Щоб розслідувати загадкове вбивство тварини, він записує всі факти, хоча батько забороняє йому втручатися в цю історію. У Крістофера гострий розум, він сильний в математиці, але мало що розуміє в повсякденному житті. Він не виносить дотиків, не довіряє незнайомим і ніколи не сходить зі звичного шляху. Крістофер ще не знає, що розслідування переверне все його життя.</span>',
    genre: 3,
    image:
      'https://multiplex.ua//images/52/fa/52fa11631cac85d7119e34358785b28e.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2018</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">The Curious Incident of the Dog in the Night-Time</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Меріенн Елліотт</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">24.07.2021</span> - 28.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська мова з українськими субтитрами</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/play">Спектакль</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:15  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">П&#39;єса Саймона Стівенса за романом Марка Хеддона</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Крістофер Бун - Люк Тредуей, Ед Бун - Пол Ріттер, Джуді Бун - Нікола Уолкер, Шивон - Нів Кьюсак, Місіс Олександр - Уна Стаббс</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 59,
    name: 'KISS ROCKS VEGAS',
    description:
      'Неповторний глем-рок групи &laquo;KISS&raquo; не переплутати ні з чим, як і грандіозні концертні шоу з піротехнічними ефектами та оригінальний макіяж кожного учасника. У листопаді 2014р. культова група дала історичний концерт в Hard Rock Hotel (Лас-Вегас, США), кращі номери якого було зафільмовано та відтворено у концертному відео KISS ROCKS VEGAS.',
    genre: 3,
    image:
      'https://multiplex.ua//images/8e/64/8e648892811589e5b23a99133fd7e575.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2016</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">KISS ROCKS VEGAS</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Devin Dehaven</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">23.07.2021</span> - 23.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">мова оригіналу </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/concerto">Концерт</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:42  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Gene Simmons, Eric Singer, Paul Stanley, Tommy Thayer  </p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 55,
    name: 'A Quiet Place: Part II',
    description:
      'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.',
    genre: 5,
    image:
      'https://multiplex.ua//images/97/f8/97f82466fadadcff7fb94e29745f9914.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">A Quiet Place: Part II</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">John Krasinski</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">29.06.2021</span> - 29.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">English</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/thriller">Трилер</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:37  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">United States</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Paramount Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Emily Blunt, Cillian Murphy, Millicent Simmonds, Noah Jupe, Djimon Hounsou</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 52,
    name: 'Спіріт: дикий мустанг',
    description:
      'Студія DreamWorks Animation зняла анімаційний фільм &laquo;Спіріт: Дикий мустанг&raquo; / Spirit Untamed, що є своєрідним продовженням мультфільму &laquo;Спіріт: Душа прерій&raquo; / &laquo;Spirit: Stallion of the Cimarron&raquo; 2002 року.',
    genre: 0,
    image:
      'https://multiplex.ua//images/df/24/df24b2f29603a1ed1ac66506d6d0fd80.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Spirit Untamed</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Елейн Боґан (анімаційні серіали по всесвіту «Як приборкати дракона»)</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">05.06.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">5.4</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/animation">Анімація</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:28  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Universal</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Енніо Торресан ( «Мадагаскар», «Панда Кунг-фу», «Турбо», «Бебі бос», «Єті»)</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Ізабела Мерсед, Ейса Ґонсалес, Джейк Джилленгол, МакКенна Ґрейс, Волтон Гоггінс</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 64,
    name: 'Fast &amp; Furious 9',
    description:
      "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
    genre: 5,
    image:
      'https://multiplex.ua//images/90/d7/90d7b8e0db5a1a84c39629bee0aad48d.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Fast &amp; Furious 9</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Justin Lin</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">06.07.2021</span> - 06.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">English</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/thriller">Трилер</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/crime">Кримінал</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:25  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">United States</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Universal Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Daniel Casey, Justin Lin</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris &#34;Ludacris&#34; Bridges, John Cena, Jordana Brewster, Nathalie Emmanuel</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 49,
    name: 'Бджілка Майя 3. Місія «Золоте яйце»',
    description:
      'Улюблені смугасті герої &ndash; Майя і Віллі повертаються з новою місією і, звісно ж, новими веселими витівками! Тепер вони рятують таємниче золоте яйце, а заразом Принцесу і світ!',
    genre: 5,
    image:
      'https://multiplex.ua//images/06/78/0678d58c8bc85f6cf1bb7c8e7b0a7a2e.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Maya the Bee 3: The Golden Orb</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Ноель Клірі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">24.06.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">6.2</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/animation">Анімація</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:28  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Австралія, Німеччина</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Адріан Бікенбах, Фін Едквіст</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 47,
    name: 'Лука',
    description:
      'Це історія про дорослішання хлопчика, наповнене морозивом, пастою та нескінченними поїздками на скутері. Головний герой Лука ділить свої пригоди зі своїм новим найкращим другом, але розвагам та веселощам загрожує схований глибоко-глибоко секрет: морські страховиська з іншого світу, які живуть просто під поверхнею води',
    genre: 2,
    image:
      'https://multiplex.ua//images/67/b4/67b41954f25fc401be475f83a663ac47.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">LUCA</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Енріко Казароза</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">17.06.2021</span> - 14.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">7.6</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/animation">Анімація</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:35  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США, Італія</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Pixar Animation Studios, Walt Disney Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Енріко Казароза</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Джейкоб Трембле («Хороші хлопці», «Диво»), Мая Рудольф («Зоонаглядач», «LEGO ФІЛЬМ 2»), Джек Ділан Ґрейзер (дилогія «Воно», «Шазам!»), Джим Ґаффіґан, Емма Берман, Марко Баррічеллі та інші.</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 53,
    name: 'Битва світів',
    description:
      'Чи може роман змінити реальність? Пригодницький фільм &laquo;Битва світів&raquo; розповідає історію Конґвена, автора серії фентезійних романів про молодого чоловіка, якого назвав своїм ім&rsquo;ям. Герой книги живе метою помститися за сестру, здолати могутнього бога Редмейна і покласти край тиранічному правлінню. На цьому шляху на хлопця чекають суворі випробування та участь у масштабних битвах.&nbsp;Та чи здогадується письменник, що події його роману можуть змінювати реальність, у якій живе він сам? І що безжальний убивця в червоному уже отримав завдання його вбити? Зустрічай епічну пригоду &laquo;Битва світів&raquo; у кіно!',
    genre: 2,
    image:
      'https://multiplex.ua//images/7d/f7/7df7ce3fd473825ac4dbc4bce3dbed0f.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">ASSASSIN IN RED</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Лу Ян</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">17.06.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/action">Екшн</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/fantasy">Фентезі</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:10  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Китай</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Free Whale Pictures, Huace Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Лей Цзяїнь, Ян Мі, Дун Цзицзянь, Юй Хевей, Ґо Цзінфей,Тун Лія, Дун Цзє</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 61,
    name: 'Дивовижний світ Ієроніма Босха',
    description:
      "Рівно 600 років тому, в 1516 році, в Бургундському герцогстві помер Ієронім Босх - художник, який пов'язав своєю творчістю Середньовіччя і Новий час і так і залишився загадкою для мистецтвознавців. У ювілейному для Босха 2016 році його твори повернулися в рідне місто живописця Хертогенбос в Північному Брабанте заради однієї з головних виставок-блокбастерів року - &laquo;Ієронім Босх. Бачення генія &raquo;. За три місяці музей Північного Брабанта відвідали майже 500 тисяч осіб, а куратор виставки Шарль де Моой справедливо зауважив, що навряд чи сам Босх бачив таку кількість власних шедеврів, зібраних разом: з 24 збережених живописних творів Босха на виставці виявилися 17, з 20 малюнків - 19.",
    genre: 4,
    image:
      'https://multiplex.ua//images/90/6f/906fb44cafcd002ae8945ccf22f451d7.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2017</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">The Curious World of Hieronymus Bosch</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Філ Грабскі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">07.07.2021</span> - 14.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська з українськими субтитрами</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/art">Мистецтво</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:30  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t</ul>'
  }
];

[
  {
    id: 63,
    name: 'Загадкове нічне вбивство собаки',
    description:
      '<span style="font-weight: 400;">Перед 15-річним Крістофером лежить мертвий сусідський собака - його закололи вилами. На годиннику сім хвилин на першу, і хлопчик - головний підозрюваний. Щоб розслідувати загадкове вбивство тварини, він записує всі факти, хоча батько забороняє йому втручатися в цю історію. У Крістофера гострий розум, він сильний в математиці, але мало що розуміє в повсякденному житті. Він не виносить дотиків, не довіряє незнайомим і ніколи не сходить зі звичного шляху. Крістофер ще не знає, що розслідування переверне все його життя.</span>',
    genre: 3,
    image:
      'https://multiplex.ua//images/52/fa/52fa11631cac85d7119e34358785b28e.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2018</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">The Curious Incident of the Dog in the Night-Time</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Меріенн Елліотт</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">24.07.2021</span> - 28.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська мова з українськими субтитрами</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/play">Спектакль</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:15  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">П&#39;єса Саймона Стівенса за романом Марка Хеддона</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Крістофер Бун - Люк Тредуей, Ед Бун - Пол Ріттер, Джуді Бун - Нікола Уолкер, Шивон - Нів Кьюсак, Місіс Олександр - Уна Стаббс</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 52,
    name: 'Спіріт: дикий мустанг',
    description:
      'Студія DreamWorks Animation зняла анімаційний фільм &laquo;Спіріт: Дикий мустанг&raquo; / Spirit Untamed, що є своєрідним продовженням мультфільму &laquo;Спіріт: Душа прерій&raquo; / &laquo;Spirit: Stallion of the Cimarron&raquo; 2002 року.',
    genre: 0,
    image:
      'https://multiplex.ua//images/df/24/df24b2f29603a1ed1ac66506d6d0fd80.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Spirit Untamed</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Елейн Боґан (анімаційні серіали по всесвіту «Як приборкати дракона»)</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">05.06.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">5.4</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/animation">Анімація</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:28  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Universal</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Енніо Торресан ( «Мадагаскар», «Панда Кунг-фу», «Турбо», «Бебі бос», «Єті»)</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Ізабела Мерсед, Ейса Ґонсалес, Джейк Джилленгол, МакКенна Ґрейс, Волтон Гоггінс</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 49,
    name: 'Бджілка Майя 3. Місія «Золоте яйце»',
    description:
      'Улюблені смугасті герої &ndash; Майя і Віллі повертаються з новою місією і, звісно ж, новими веселими витівками! Тепер вони рятують таємниче золоте яйце, а заразом Принцесу і світ!',
    genre: 5,
    image:
      'https://multiplex.ua//images/06/78/0678d58c8bc85f6cf1bb7c8e7b0a7a2e.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Maya the Bee 3: The Golden Orb</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Ноель Клірі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">24.06.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">6.2</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/animation">Анімація</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:28  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Австралія, Німеччина</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Адріан Бікенбах, Фін Едквіст</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 60,
    name: 'Чемпіонат Європи: Швеція - Україна',
    description: 'Чемпіонат Європи: Швеція - Україна',
    genre: 3,
    image:
      'https://multiplex.ua//images/99/8f/998fa780b3e9f47c18df180b9ede19c9.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">29.06.2021</span> - 29.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/football">Футбол</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t3:00  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 57,
    name: 'System of a Down: сила правди',
    description:
      'Документальний фільм &laquo;System of a Down: сила правди&raquo; починається як історія гурту System of a Down. Шалена енергія музики чотирьох хлопців вірменського походження з Каліфорнії розривала чарти на початку нульових та навіть стала причиною масових заворушень в Лос-Анджелесі, коли місцева влада скасувала їхній промо-концерт.',
    genre: 1,
    image:
      'https://multiplex.ua//images/4d/4f/4d4f97b66ddd79b5d20dd77b6e0337c6.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2020</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">System of a Down: Truth to Power</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Ґарін Ованнісян</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">09.07.2021</span> - 09.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська мова з українськими субтитрами </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/documentary">Документальний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:19  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Ґарін Ованнісян</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 64,
    name: 'Fast &amp; Furious 9',
    description:
      "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
    genre: 5,
    image:
      'https://multiplex.ua//images/90/d7/90d7b8e0db5a1a84c39629bee0aad48d.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Fast &amp; Furious 9</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Justin Lin</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">06.07.2021</span> - 06.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">English</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/thriller">Трилер</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/crime">Кримінал</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:25  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">United States</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Universal Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Daniel Casey, Justin Lin</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris &#34;Ludacris&#34; Bridges, John Cena, Jordana Brewster, Nathalie Emmanuel</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 61,
    name: 'Дивовижний світ Ієроніма Босха',
    description:
      "Рівно 600 років тому, в 1516 році, в Бургундському герцогстві помер Ієронім Босх - художник, який пов'язав своєю творчістю Середньовіччя і Новий час і так і залишився загадкою для мистецтвознавців. У ювілейному для Босха 2016 році його твори повернулися в рідне місто живописця Хертогенбос в Північному Брабанте заради однієї з головних виставок-блокбастерів року - &laquo;Ієронім Босх. Бачення генія &raquo;. За три місяці музей Північного Брабанта відвідали майже 500 тисяч осіб, а куратор виставки Шарль де Моой справедливо зауважив, що навряд чи сам Босх бачив таку кількість власних шедеврів, зібраних разом: з 24 збережених живописних творів Босха на виставці виявилися 17, з 20 малюнків - 19.",
    genre: 4,
    image:
      'https://multiplex.ua//images/90/6f/906fb44cafcd002ae8945ccf22f451d7.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2017</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">The Curious World of Hieronymus Bosch</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Філ Грабскі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">07.07.2021</span> - 14.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська з українськими субтитрами</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/art">Мистецтво</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:30  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 55,
    name: 'A Quiet Place: Part II',
    description:
      'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.',
    genre: 5,
    image:
      'https://multiplex.ua//images/97/f8/97f82466fadadcff7fb94e29745f9914.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">A Quiet Place: Part II</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">John Krasinski</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">29.06.2021</span> - 29.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">English</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/thriller">Трилер</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:37  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">United States</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Paramount Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Emily Blunt, Cillian Murphy, Millicent Simmonds, Noah Jupe, Djimon Hounsou</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 51,
    name: 'Круелла',
    description:
      '<span style="text-decoration: underline;"><strong><span lang="UK"><em>&laquo;Фільм &laquo;Круелла&raquo; містить кілька сцен зі спалахами світла, які можуть вплинути на глядачів, схильних до фоточутливої епілепсії або мають інші фоточутливості&raquo;.</em></span></strong></span>',
    genre: 1,
    image:
      'https://multiplex.ua//images/2c/c1/2cc1e1151f8a1df72c4149be29819e2f.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">CRUELLA</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Крейґ Ґіллеспі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">27.05.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">7.4</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/comedy">Комедія</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/crime">Кримінал</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:13  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Walt Disney Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Емма Стоун («Ла-Ла Ленд»), Емма Томпсон (франшиза «Гаррі Поттер»), Марк Стронґ («Шерлок Холмс»), Пол Волтер Гаузер («Річард Джуелл»)</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 62,
    name: 'Трилогія братів Леман',
    description:
      'У 1844 році 23-річний Генрі Леман, син єврейського торговця худобою з Баварії, висадився на береги Сполучених Штатів з одним чемоданом в руках.&nbsp; Він оселився в маленькому містечку в штаті Алабама і відкрив магазинчик галантереї &laquo;Г.&nbsp; Леман&raquo;.&nbsp; Через кілька років до нього приєдналися брати - Еммануель і Мейер, і фірма стала називатися Lehman Brothers ... В історію світової економіки ця назва назавжди увійшла після 2008 року, коли банкрутство компанії, яка коштувала на той час сотні мільярдів доларів, призвело до грандіозного кризи, що торкнулася&nbsp; всіх і все.',
    genre: 1,
    image:
      'https://multiplex.ua//images/92/35/923564bc9b5588c79af84453ba8b271c.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2019</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">The Lehman Trilogy</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Сем Мендес</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">07.07.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Англійська мова з українськими субтитрами</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/play">Спектакль</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t3:08  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Саймон Раселл Біл, Бен Майлз, Адам Годлі</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 56,
    name: 'Дядя Ваня',
    description:
      " <li>Новий спектакль поставлений Єном Ріксон по тексту, адаптованому відмінним ірландським режисером і драматургом, лауреатом премії Олів'є Конором Макферсоном, з чуйною увагою до першоджерела і чудовою легкістю.&nbsp;Театр Гарольда Пінтера в Вест-Енді, де йшов спектакль, до 2011-го року називався Театром Комедії - і Ріксон прекрасно транслює особливий трагедійний комізм Чехова.&nbsp;На сцені зібраний чудовий акторський ансамбль.&nbsp;</li> ",
    genre: 1,
    image:
      'https://multiplex.ua//images/34/3e/343e46bba6b3fae77d8e26c0937616a8.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2020</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Uncle Vanya</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val"> Іен Ріксон</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">30.06.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">англійською мовою з українськими субтитрами </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/play">Спектакль</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/theater">Театр</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:35  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Великобританія</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Антон Чехов, Конор Макферсон</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Тобі Джонс Річард Армітедж Роджер Аллам Еймі Лу Вуд Розалінд Елізар Дірбла Моллой Пітер Уайт Анна Калдер-Маршалл</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 58,
    name: 'Queen: live in Budapest',
    description:
      'Фільм-концерт, створений угорським режисером Яношем Жомбояї із кадрів групи під час перебування в Будапешті та запису концерту на стадіоні &laquo;Непштадіон&raquo; в 1986 році. Оскільки зірка такої величини, як ФРЕДДІ МЕРК&rsquo;ЮРІ з легендарними музикантами, вперше давали концерт у соціалістичній Угорщині, ця подія стала визначною для всієї країни. Тому на концерті працювало одночасно 14 професійних режисерів.',
    genre: 1,
    image:
      'https://multiplex.ua//images/96/c6/96c61be33c5f178b7bc4d20756c13e1b.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">1987</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Queen: live in Budapest</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val"> Янош Жомбояі</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">16.07.2021</span> - 16.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">моваю оригіналу </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/concerto">Концерт</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:36  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val"> Угорщина, Канада, США</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 46,
    name: 'Тілоохоронець дружини кілера',
    description:
      'Довгоочікуване возз&rsquo;єднання зухвалої парочки, за якою всі скучили! Кілеру міжнародного рівня (Семюел Л. Джексон) і його професійному тілоохоронцю (Раян Рейнольдс) таки вдалось потоваришувати &ndash; і це було крутезно! Тепер вони об&rsquo;єднуються, щоб захистити дружину найманого вбивці (Сальма Гаєк). Продовження нестримної комедії обіцяє ще більше екшну, гумору і шикарної акторської гри. Приготуйся зустріти Антоніо Бандераса і Морґана Фрімена, які приєдналися до одного з найгучніших кінохітів цього літа!',
    genre: 3,
    image:
      'https://multiplex.ua//images/cd/f9/cdf900c6a03529d317c492e1dad90f2b.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">THE HITMAN&#39;S WIFE&#39;S BODYGUARD</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Патрік Г&#39;юз («Тілоохоронець кілера»)</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">24.06.2021</span> - 21.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">6.5</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/action">Екшн</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/comedy">Комедія</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:56  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Millennium Films</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Том О’Коннор</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Раян Рейнольдс, Семюел Л. Джексон, Сальма Хаєк, Морган Фріман, Антоніо Бандерас, Том Хоппер</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 59,
    name: 'KISS ROCKS VEGAS',
    description:
      'Неповторний глем-рок групи &laquo;KISS&raquo; не переплутати ні з чим, як і грандіозні концертні шоу з піротехнічними ефектами та оригінальний макіяж кожного учасника. У листопаді 2014р. культова група дала історичний концерт в Hard Rock Hotel (Лас-Вегас, США), кращі номери якого було зафільмовано та відтворено у концертному відео KISS ROCKS VEGAS.',
    genre: 3,
    image:
      'https://multiplex.ua//images/8e/64/8e648892811589e5b23a99133fd7e575.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2016</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">KISS ROCKS VEGAS</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Devin Dehaven</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">23.07.2021</span> - 23.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">мова оригіналу </p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/concerto">Концерт</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:42  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Gene Simmons, Eric Singer, Paul Stanley, Tommy Thayer  </p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 50,
    name: 'Форсаж 9: Нестримна сага',
    description:
      'За сюжетом Домінік Торетто залягає на дно та живе спокійним життям з Летті та їхнім сином Брайаном. Проте доля має на нього зовсім інші плани, адже небезпека минулих помилок завжди ховається за мирним горизонтом. Небезпечна кібертерористка Сайфер вирішує помститися Домініку за попередні невдачі та використовує для цього професійного найманого вбивцю Джейкоба (Джон Сіна), який до того ж є давно покинутим братом Торетто.&nbsp;',
    genre: 2,
    image:
      'https://multiplex.ua//images/88/7d/887d5babb06ccc836dfd144a8d2b6f2d.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2019</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">FAST &amp; THE FURIOUS 9</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">ДЖАСТІН ЛІН («Форсаж 6», «Зоряний шлях: За межами Всесвіту»)</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">11.06.2021</span> - 07.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">5.3</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/crime">Кримінал</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/thriller">Трилер</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:23  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Universal</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">ВІН ДІЗЕЛЬ («Форсаж», «Хроніки Рідіка»), ШАРЛІЗ ТЕРОН («Форсаж 8», «Білосніжка і мисливець», «Прометей»), ДЖОН СІНА («Бамблбі»).</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 47,
    name: 'Лука',
    description:
      'Це історія про дорослішання хлопчика, наповнене морозивом, пастою та нескінченними поїздками на скутері. Головний герой Лука ділить свої пригоди зі своїм новим найкращим другом, але розвагам та веселощам загрожує схований глибоко-глибоко секрет: морські страховиська з іншого світу, які живуть просто під поверхнею води',
    genre: 2,
    image:
      'https://multiplex.ua//images/67/b4/67b41954f25fc401be475f83a663ac47.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">LUCA</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Енріко Казароза</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">17.06.2021</span> - 14.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">7.6</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/animation">Анімація</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:35  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США, Італія</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Pixar Animation Studios, Walt Disney Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Енріко Казароза</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Джейкоб Трембле («Хороші хлопці», «Диво»), Мая Рудольф («Зоонаглядач», «LEGO ФІЛЬМ 2»), Джек Ділан Ґрейзер (дилогія «Воно», «Шазам!»), Джим Ґаффіґан, Емма Берман, Марко Баррічеллі та інші.</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 53,
    name: 'Битва світів',
    description:
      'Чи може роман змінити реальність? Пригодницький фільм &laquo;Битва світів&raquo; розповідає історію Конґвена, автора серії фентезійних романів про молодого чоловіка, якого назвав своїм ім&rsquo;ям. Герой книги живе метою помститися за сестру, здолати могутнього бога Редмейна і покласти край тиранічному правлінню. На цьому шляху на хлопця чекають суворі випробування та участь у масштабних битвах.&nbsp;Та чи здогадується письменник, що події його роману можуть змінювати реальність, у якій живе він сам? І що безжальний убивця в червоному уже отримав завдання його вбити? Зустрічай епічну пригоду &laquo;Битва світів&raquo; у кіно!',
    genre: 2,
    image:
      'https://multiplex.ua//images/7d/f7/7df7ce3fd473825ac4dbc4bce3dbed0f.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">16&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_16.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 16 років</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">ASSASSIN IN RED</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Лу Ян</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">17.06.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/action">Екшн</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/fantasy">Фентезі</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:10  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Китай</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val">Free Whale Pictures, Huace Pictures</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Лей Цзяїнь, Ян Мі, Дун Цзицзянь, Юй Хевей, Ґо Цзінфей,Тун Лія, Дун Цзє</p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 48,
    name: 'Чорна Вдова',
    description:
      ' <div class="conLwithR"> <div class="mycontent"> <div class="mycontent2"> <div class="clearfix"> <div class="region region-content"> <div id="block-system-main" class="block block-system"> <div class="content"> <div id="node-15657" class="node node-movie clearfix"> <div class="content"> <div id="node-movie-full-group-movie-info" class="group-movie-info field-group-div"> <div class="field field-name-body field-type-text-with-summary field-label-hidden"> <div class="field-items"> <p style="text-align: center;">Звертаємо особливу увагу, що у нашому кінотеатрі глядачам пропонується переглянути ексклюзивну версію стрічки в технології <strong>Screen X</strong> та <strong>ІМАХ.</strong>&nbsp;Творці фільму постаралися і підготували для показу на екранах<strong> ІМАХ</strong> варіант, що містить зображення на 26% більше за розміром в порівнянні зі звичайними екранами кінотеатрів. Кожен може не просто переглядати фільм, а буквально поринути в живу атмосферу фільму, оскільки замість звичного співвідношення сторін екрану 2.4:1 фільм демонструватиметься у форматі 1.9:1.</p> <p style="text-align: left;">&nbsp;</p> <p style="font-weight: 400; text-align: center;"><strong>ScreenX </strong>- це панорамний формат зображення з кутом огляду в 270 градусів. Для досягнення такого ефекту зображення проектується на центральний і два бокових екранах кінотеатру. Основні сцени фільма демонструють на головному екрані, а бічні збільшують кадрову композицію. Такий розширений простір дає змогу глядачеві опинитися реально &laquo;всередині&raquo; картини і сприймати кіно по-новому!</p> <p style="font-weight: 400; text-align: left;">&nbsp;</p> <p style="font-weight: 400;">Наташа Романова, відома як Чорна Вдова, подивиться у вічі темним сторінкам книги свого життя, коли зіткнеться із небезпечною змовою, пов&rsquo;язаною з власним минулим. Наташу переслідує небезпечна сила, яка ні перед чим не зупиниться на шляху до її знищення. Тепер вона має розібратись і зі своїм шпигунським минулим, і зі стосунками, які зруйнувала ще до того, як приєдналась до Месників.&nbsp;</p> <p style="font-weight: 400;">&nbsp;</p> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> ',
    genre: 0,
    image:
      'https://multiplex.ua//images/af/ed/afed45a4a5b9ec38d7b0bb6988ac93c3.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">12&#43; (Попередньо)  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_12.svg);"></div>  \t\t\t\t\t\t\t\t<p>Старше 12 років, або у супроводі батьків чи опікунів</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2021</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Black Widow</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Кейт Шортланд</p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">07.07.2021</span> - 14.07.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/sci-fi">Фантастика</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/action">Екшн</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/boyevik">Бойовик</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t2:14  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val"> Marvel Studios</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Жак Шеффер, Нед Бенсон</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Скарлетт Йоганссон («Месники», «Привид у броні», «Книга джунглів»), Девід Гарбор («Дивні дива», «Загін самогубців», «Хеллбой»), Флоренс П&#39;ю («Сонцестояння»), Рейчел Вайс («Костянтин: Володар темряви», «Спадок Борна», «Фонтан»), О. Т. Фаґбенлі </p>  \t\t\t\t</li>  \t\t\t</ul>'
  },
  {
    id: 54,
    name: 'Кролик Петрик: Втеча до міста',
    description:
      'Кролик Петрик та інші вухаті бешкетники повертаються! Нарешті між кроликами та їхніми сусідами встановлено мир, та скільки б зусиль Петрик не докладав, йому важко приборкати свій характер і стати слухняним. Тож він покидає затишний садок і вирушає назустріч новим пригодам і новим викликам. Люди, начувайтеся, зухвалий кролик підготував багато сюрпризів!',
    genre: 3,
    image:
      'https://multiplex.ua//images/a1/cf/a1cf825a7eb1785a7ead7203ecb61529.jpeg',
    additional:
      '<ul>  \t\t\t\t<li class="rating">  \t\t\t\t\t<p class="key">Вік:</p>  \t\t\t\t\t<div class="val">0&#43;  \t\t\t\t\t\t<div class="age_hint">  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t<div class="age_icon" style="background-image: url(/img/age_0.svg);"></div>  \t\t\t\t\t\t\t\t<p>Без вікових обмежень</p>  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t\t  \t\t\t\t\t\t</div>  \t\t\t\t\t</div>  \t\t\t\t</li>    \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Рік:</p>  \t\t\t\t\t\t<p class="val">2020</p>  \t\t\t\t\t</li>  \t\t\t\t  \t\t\t\t\t<li>  \t\t\t\t\t\t<p class="key">Оригінальна назва:</p>  \t\t\t\t\t\t<p class="val">Peter Rabbit 2</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Режисер:</p>  \t\t\t\t\t<p class="val">Вілл Глук </p>  \t\t\t\t</li>  \t\t\t\t  \t\t\t\t  \t\t\t\t\t  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Період прокату:</p>  \t\t\t\t\t\t\t<p class="val"><span id="mvi_openingdate">27.05.2021</span> - 30.06.2021</p>  \t\t\t\t\t\t</li>  \t\t\t\t\t  \t\t\t\t\t\t<li><p class="key">Рейтинг Imdb:</p>  \t\t\t\t\t\t\t<p class="val">6.2</p>  \t\t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Мова:</p>  \t\t\t\t\t<p class="val" id="mvi_language">Українська мова</p>  \t\t\t\t</li>  \t\t\t\t\t<li><p class="key">Жанр:</p>  \t\t\t\t\t\t<p class="val">  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/adventure">Пригоди</a>,  \t\t\t\t\t\t\t\t<a rel="nofollow" href="/genre/family">Сімейний</a>  \t\t\t\t\t\t</p>  \t\t\t\t\t</li>  \t\t\t\t<li><p class="key">Тривалість:</p>  \t\t\t\t\t<p class="val">  \t\t\t\t\t1:33  \t\t\t\t\t</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Виробництво:</p>  \t\t\t\t\t<p class="val">Австралія, США</p>  \t\t\t\t</li>  \t\t\t\t<li>  \t\t\t\t\t<p class="key">Студія:</p>  \t\t\t\t\t<p class="val"> Sony Pictures Entertainment</p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">Сценарій:</p>  \t\t\t\t\t<p class="val">Вілл Глук </p>  \t\t\t\t</li>  \t\t\t\t<li><p class="key">У головних ролях:</p>  \t\t\t\t\t<p class="val">Роуз Бірн, Донал Ґлісон, Джеймс Корден, Марго Роббі</p>  \t\t\t\t</li>  \t\t\t</ul>'
  }
];

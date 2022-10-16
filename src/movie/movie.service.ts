import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument } from './entities/movie.entity';
import { ISearchQuery } from './types/search-query';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name)
    private movieModel: Model<MovieDocument>
  ) {}

  async create(dto: CreateMovieDto) {
    return await this.movieModel.create(dto);
  }

  async findAll(query: ISearchQuery) {
    const filter = {};
    if (query.movie_id) filter['_id'] = query.movie_id;
    if (query.genres) filter['genres'] = query.genres;
    if (query.name) filter['name'] = { $regex: query.name, $options: 'si' };

    return await this.movieModel.find(filter);
  }

  async findOne(id: ObjectId) {
    return await this.movieModel.findById(id);
  }

  update(id: ObjectId, dto: UpdateMovieDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: ObjectId) {
    return `This action removes a #${id} ticket`;
  }
}

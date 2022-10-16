import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieService } from './movie.service';
import { ISearchQuery } from './types/search-query';

@Controller('api/movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({ summary: 'Create recipient' })
  @ApiResponse({ status: 201, type: CreateMovieDto })
  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }

  @Get()
  findAll(@Query() query: ISearchQuery) {
    return this.movieService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.movieService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateMovieDto) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.movieService.remove(id);
  }
}

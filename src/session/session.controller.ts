import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { SessionService } from './session.service';

@Controller('api/movieShows')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @ApiOperation({ summary: 'Create session' })
  @ApiResponse({ status: 201, type: [CreateSessionDto] })
  @Post()
  create(@Body() createSessionDto: CreateSessionDto[]) {
    return this.sessionService.create(createSessionDto);
  }

  @ApiOperation({ summary: 'Get all sessions' })
  @ApiResponse({ status: 200 })
  @Get()
  findAll() {
    return this.sessionService.findAll();
  }

  @ApiOperation({ summary: 'Get session by id' })
  @ApiQuery({ name: 'movie_id', required: true })
  @ApiResponse({ status: 201 })
  @Get(':movie_id')
  findOne(@Param('movie_id') movie_id: ObjectId) {
    return this.sessionService.findOne(movie_id);
  }

  @ApiOperation({ summary: 'Update session' })
  @ApiParam({ name: 'id', required: true })
  @ApiResponse({ status: 201, type: [CreateSessionDto] })
  @Patch(':id')
  update(
    @Param('id') id: ObjectId,
    @Body() updateSessionDto: UpdateSessionDto
  ) {
    return this.sessionService.update(id, updateSessionDto);
  }

  @ApiOperation({ summary: 'Delete session' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.sessionService.remove(id);
  }
}

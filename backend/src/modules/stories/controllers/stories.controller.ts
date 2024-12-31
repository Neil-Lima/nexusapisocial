/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { StoriesService } from '../services/stories.service';
import { CreateStoryDto } from '../dto/create-story.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('stories')
@UseGuards(JwtAuthGuard)
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Post()
  create(@Request() req, @Body() createStoryDto: CreateStoryDto) {
    return this.storiesService.create(req.user.userId, createStoryDto);
  }

  @Get('friends')
  getFriendsStories(@Request() req) {
    return this.storiesService.getFriendsStories(req.user.userId);
  }

  @Post(':id/view')
  viewStory(@Param('id') id: string, @Request() req) {
    return this.storiesService.viewStory(id, req.user.userId);
  }
}

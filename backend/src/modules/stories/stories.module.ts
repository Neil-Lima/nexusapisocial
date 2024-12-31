/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoriesService } from './services/stories.service';
import { StoriesController } from './controllers/stories.controller';
import { Story, StorySchema } from './schemas/story.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Story.name, schema: StorySchema },
      { name: 'User', schema: 'UserSchema' }
    ])
  ],
  controllers: [StoriesController],
  providers: [StoriesService],
  exports: [StoriesService]
})
export class StoriesModule {}

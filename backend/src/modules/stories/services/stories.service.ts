/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Story } from '../schemas/story.schema';
import { CreateStoryDto } from '../dto/create-story.dto';
import { processMedia, validateMedia } from '../../../config/uploads.config';

@Injectable()
export class StoriesService {
  constructor(
    @InjectModel(Story.name) private storyModel: Model<Story>,
    @InjectModel('User') private userModel: Model<any>
  ) {}

  async create(userId: string, createStoryDto: CreateStoryDto): Promise<Story> {
    const mediaValidation = validateMedia(createStoryDto.media);
    if (!mediaValidation.isValid) {
      throw new Error('Formato de mídia inválido');
    }

    const processedMedia = await processMedia(createStoryDto.media);
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    const story = new this.storyModel({
      author: new Types.ObjectId(userId),
      media: processedMedia,
      mediaType: createStoryDto.mediaType,
      timestamp: 'agora',
      views: 0,
      viewers: [],
      expiresAt
    });

    return await story.save();
  }

  async getFriendsStories(userId: string): Promise<any[]> {
    const user = await this.userModel.findById(userId);
    if (!user || !user.friends) return [];

    const stories = await this.storyModel.find({
      author: { $in: user.friends },
      expiresAt: { $gt: new Date() }
    })
    .populate('author', 'nome sobrenome profileImage')
    .sort({ createdAt: -1 })
    .lean()
    .exec();

    const groupedStories = stories.reduce((acc, story: any) => {
      const authorId = story.author._id.toString();
      if (!acc[authorId]) {
        acc[authorId] = {
          id: authorId,
          user: story.author.nome,
          avatar: story.author.profileImage,
          stories: []
        };
      }
      acc[authorId].stories.push({
        id: story._id,
        image: story.media,
        timestamp: story.timestamp,
        views: story.views
      });
      return acc;
    }, {});

    return Object.values(groupedStories);
  }

  async viewStory(storyId: string, userId: string): Promise<Story> {
    const story = await this.storyModel.findById(storyId);
    if (!story) throw new NotFoundException('Story não encontrado');

    if (!story.viewers.includes(new Types.ObjectId(userId))) {
      story.viewers.push(new Types.ObjectId(userId));
      story.views += 1;
      await story.save();
    }

    return story;
  }
}

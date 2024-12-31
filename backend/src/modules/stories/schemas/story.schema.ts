/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Story extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  author: mongoose.Types.ObjectId;

  @Prop({ type: String, maxlength: 10485760, required: true })
  media: string;

  @Prop({ required: true, enum: ['image', 'video'] })
  mediaType: string;

  @Prop({ type: Number, default: 0 })
  views: number;

  @Prop({ type: String })
  timestamp: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  viewers: mongoose.Types.ObjectId[];

  @Prop({ required: true })
  expiresAt: Date;
}

export const StorySchema = SchemaFactory.createForClass(Story);

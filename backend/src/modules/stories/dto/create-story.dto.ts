/* eslint-disable prettier/prettier */

import { IsString, IsEnum } from 'class-validator';

export class CreateStoryDto {
  @IsString()
  media: string;

  @IsEnum(['image', 'video'])
  mediaType: string;
}

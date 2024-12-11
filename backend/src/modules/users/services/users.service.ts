import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { processImage, validateMedia } from '../../../config/uploads.config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }

    if (
      createUserDto.profileImage &&
      !validateMedia(createUserDto.profileImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de perfil inválido');
    }

    if (
      createUserDto.coverImage &&
      !validateMedia(createUserDto.coverImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de capa inválido');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.senha, 10);

    const processedData = {
      ...createUserDto,
      senha: hashedPassword,
      profileImage: createUserDto.profileImage
        ? await processImage(createUserDto.profileImage)
        : null,
      coverImage: createUserDto.coverImage
        ? await processImage(createUserDto.coverImage)
        : null,
    };

    const newUser = new this.userModel(processedData);
    return newUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.senha) {
      updateUserDto.senha = await bcrypt.hash(updateUserDto.senha, 10);
    }

    if (
      updateUserDto.profileImage &&
      !validateMedia(updateUserDto.profileImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de perfil inválido');
    }

    if (
      updateUserDto.coverImage &&
      !validateMedia(updateUserDto.coverImage).isValid
    ) {
      throw new BadRequestException('Formato de imagem de capa inválido');
    }

    const processedData = {
      ...updateUserDto,
      profileImage: updateUserDto.profileImage
        ? await processImage(updateUserDto.profileImage)
        : undefined,
      coverImage: updateUserDto.coverImage
        ? await processImage(updateUserDto.coverImage)
        : undefined,
    };

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, processedData, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return updatedUser;
  }

  async updateImages(
    id: string,
    profileImage?: string,
    coverImage?: string,
  ): Promise<User> {
    const updateData = {};

    if (profileImage) {
      if (!validateMedia(profileImage).isValid) {
        throw new BadRequestException('Formato de imagem de perfil inválido');
      }
      updateData['profileImage'] = await processImage(profileImage);
    }

    if (coverImage) {
      if (!validateMedia(coverImage).isValid) {
        throw new BadRequestException('Formato de imagem de capa inválido');
      }
      updateData['coverImage'] = await processImage(coverImage);
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return updatedUser;
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return deletedUser;
  }

  async getProfileImage(id: string): Promise<string> {
    const user = await this.userModel.findById(id).select('profileImage');
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user.profileImage;
  }

  async getCoverImage(id: string): Promise<string> {
    const user = await this.userModel.findById(id).select('coverImage');
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user.coverImage;
  }
}

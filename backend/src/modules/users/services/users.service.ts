import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({
      email: createUserDto.email,
    });

    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.senha, 10);

    const newUser = new this.userModel({
      ...createUserDto,
      senha: hashedPassword,
    });

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

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
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
    if (profileImage) updateData['profileImage'] = profileImage;
    if (coverImage) updateData['coverImage'] = coverImage;

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

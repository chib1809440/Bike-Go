/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  async findOne(phoneNumber: string) {
    const findUser = await this.userModel.findOne({
      phoneNumber: phoneNumber,
    });
    return findUser;
  }

  async getProfile(phoneNumber: string) {
    const findUser = await this.userModel
      .findOne({
        phoneNumber: phoneNumber,
      })
      .select('-password');
    return findUser;
  }
}

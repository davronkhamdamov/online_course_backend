import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { user } from './model/user.model';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}
  async Login(body: user, res: Response) {
    if (!body.email) return new BadRequestException('Email is required');
    const user = await this.userRepo.GetUser(body.email);
    if (!user) return new NotFoundException('Email not found');
    res.cookie('id', user.id);
    return body;
  }
  async Register(body: user, res: Response) {
    const user = await this.userRepo.GetUser(body.email);
    if (user) return new BadRequestException('User already exists');
    res.cookie('id', user.id);
    return await this.userRepo.Register(body);
  }
  async GetAll() {
    return await this.userRepo.GetAll();
  }
}

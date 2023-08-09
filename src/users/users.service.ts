import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './user.repository';
import { user } from './model/user.model';
import { Response, Request } from 'express';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}
  async Login(body: user, res: Response) {
    if (!body.email?.trim()) {
      return new BadRequestException('Email is required');
    }
    const user = await this.userRepo.GetUser(body.email);
    if (!user.email) return new NotFoundException('Email not found');
    res.cookie('id', user.id);
    return user;
  }
  async Register(body: user, res: Response) {
    if (!body.email.trim()) return new BadRequestException('Email is required');
    if (!body.username.trim()) {
      return new BadRequestException('Username is required');
    }
    const user = await this.userRepo.GetUser(body.email);
    if (user) return new BadRequestException('User already exists');
    const newUser = await this.userRepo.Register(body);
    res.cookie('id', newUser.id);
    return newUser;
  }
  async GetUser(req: Request, res: Response) {
    const user = await this.userRepo.GetUserById(req.cookies.id);
    if (!user) {
      res.clearCookie('id');
      return new NotFoundException('User Not found');
    }
    return user;
  }
}

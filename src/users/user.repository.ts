import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { user } from './model/user.model';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly Users: Repository<UserEntity>,
  ) {}
  async Register(user: user) {
    const User = new UserEntity();
    User.email = user.email;
    User.username = user.username;
    User.user_id = user.user_id;
    await this.Users.save(User);
    return User;
  }
  async GetAll() {
    return await this.Users.find();
  }
  async GetUser(email: string) {
    return await this.Users.findOne({ where: { email } });
  }
  async GetUserById(id: string) {
    return await this.Users.findOne({ where: { id } });
  }
}

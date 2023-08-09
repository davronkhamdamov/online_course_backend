import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { user } from './model/user.model';
import { Response } from 'express';
import { AuthGuard } from 'src/users/auth.guard';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('login')
  async Login(@Body() body: user, @Res({ passthrough: true }) res: Response) {
    return this.usersService.Login(body, res);
  }

  @Post('register')
  async Register(
    @Body() body: user,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.usersService.Register(body, res);
  }
  @Get('get')
  @UseGuards(AuthGuard)
  async getUser() {
    return await this.usersService.GetAll();
  }
}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { user } from './model/user.model';
import { Response, Request } from 'express';
import { AuthGuard } from 'src/users/auth.guard';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('login')
  @HttpCode(200)
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
  async getUser(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.usersService.GetUser(req, res);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Request } from 'express';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('course')
@UseGuards(AuthGuard)
export class CourseController {
  constructor(private CourseService: CourseService) {}
  @Get('list')
  async GetAllCourse() {
    return await this.CourseService.GetAll();
  }
  @Post('create')
  async CreateCourse(@Body() body: Course, @Req() req: Request) {
    return await this.CourseService.CreateCourse(body, req);
  }
  @Delete('delete/:id')
  async DeleteCourse(@Param('id') id: string) {
    return await this.CourseService.DeleteCourse(id);
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.CourseService.GetById(id);
  }
}

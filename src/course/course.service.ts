import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CourseRepository } from './course.repository';
import { CategoryRepository } from 'src/category/category.repository';
import { UsersRepository } from 'src/users/user.repository';
import { Request } from 'express';

@Injectable()
export class CourseService {
  constructor(
    private CourseRepository: CourseRepository,
    private CategoryRepository: CategoryRepository,
    private UsersRepository: UsersRepository,
  ) {}
  async GetAll() {
    return await this.CourseRepository.GetAll();
  }
  async CreateCourse(body: Course, req: Request) {
    const Category = await this.CategoryRepository.GetOne(body.category_id);
    if (!req.cookies.id && req.cookies.id.length > 35)
      return new UnauthorizedException();
    const user = await this.UsersRepository.GetUserById(req.cookies.id);
    if (!user) return new NotFoundException('User Not found');
    body.created_by = req.cookies.id;
    if (!Category) return new NotFoundException('Category not found');
    return await this.CourseRepository.CreateCourse(body);
  }
  async DeleteCourse(id: string) {
    const course = await this.CourseRepository.GetCourseById(id);
    if (!course) return new NotFoundException('Course not found');
    await this.CourseRepository.DeleteCourseById(id);
    return await this.GetAll();
  }
  async GetById(id: string) {
    const course = await this.CourseRepository.GetCourseById(id);
    if (!course) return new NotFoundException('Course not found');
    return course;
  }
}

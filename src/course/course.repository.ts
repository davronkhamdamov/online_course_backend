import { Injectable } from '@nestjs/common';
import { CourseEntity } from './model/course.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly Course: Repository<CourseEntity>,
  ) {}
  async GetAll() {
    return await this.Course.find();
  }
  async GetCourseById(id: string) {
    return await this.Course.findOne({ where: { id } });
  }
  async DeleteCourseById(id: string) {
    return await this.Course.delete(id);
  }
  async CreateCourse(body: Course) {
    const course = new CourseEntity();
    course.name = body.name;
    course.about = body.about;
    course.category_id = body.category_id;
    course.course_image = body.course_image;
    course.created_by = body.created_by;
    course.language = body.language;
    course.price = body.price;
    course.requirements = body.requirements;
    course.description = body.description;
    return await this.Course.save(course);
  }
  async GetCourseByCategoryId(id: string) {
    return await this.Course.find({ where: { category_id: id } });
  }
}

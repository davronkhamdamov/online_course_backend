import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { CourseEntity } from './model/course.entity';
import { CourseRepository } from './course.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/category/category.repository';
import { CategoryEntity } from 'src/category/model/category.entity';
import { UserEntity } from 'src/users/model/user.entity';
import { UsersRepository } from 'src/users/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CourseEntity, CategoryEntity, UserEntity]),
  ],
  controllers: [CourseController],
  providers: [
    CourseService,
    CourseRepository,
    CategoryRepository,
    UsersRepository,
  ],
})
export class CourseModule {}

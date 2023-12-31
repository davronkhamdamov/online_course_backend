import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://nyjdorju:jXXViGph_IGSVAaC1-7krFolmxKTK6tG@john.db.elephantsql.com/nyjdorju',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    CategoryModule,
    CourseModule,
  ],
})
export class AppModule {}

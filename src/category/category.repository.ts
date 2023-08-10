import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from './model/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly CategoryEntity: Repository<CategoryEntity>,
  ) {}
  async GetAll() {
    return await this.CategoryEntity.find();
  }
}

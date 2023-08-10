import { Inject, Injectable } from '@nestjs/common';
import { CategoryEntity } from './model/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './model/category.interface';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly CategoryEntity: Repository<CategoryEntity>,
  ) {}
  async GetAll() {
    return await this.CategoryEntity.find();
  }
  async GetOne(id: string) {
    return await this.CategoryEntity.findOne({ where: { id } });
  }
  async Create(body: Category) {
    const Category = new CategoryEntity();
    Category.name = body.name;
    Category.img_url = body.img_url;
    return await this.CategoryEntity.save(Category);
  }
  async DeleteCategory(id: string) {
    return await this.CategoryEntity.delete({ id });
  }
}

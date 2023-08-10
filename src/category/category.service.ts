import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { Category } from './model/category.interface';

@Injectable()
export class CategoryService {
  constructor(private CategoryRepository: CategoryRepository) {}
  async GetAll() {
    return await this.CategoryRepository.GetAll();
  }
  async Create(body: Category) {
    return await this.CategoryRepository.Create(body);
  }
  async DeleteCategory(id: string) {
    const Category = await this.CategoryRepository.GetOne(id);
    if (Category) {
      await this.CategoryRepository.DeleteCategory(id);
      return await this.CategoryRepository.GetAll();
    }
    return new NotFoundException('Category not found');
  }
}

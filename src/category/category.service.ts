import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private CategoryRepository: CategoryRepository) {}
  async GetAll() {
    return await this.CategoryRepository.GetAll();
  }
}

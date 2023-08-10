import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}
  @Get('list')
  async GetList() {
    return await this.CategoryService.GetAll();
  }
  @Post('create')
  async CreateCategory() {}
}

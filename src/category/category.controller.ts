import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './model/category.interface';

@Controller('category')
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}
  @Get('list')
  async GetList() {
    return await this.CategoryService.GetAll();
  }
  @Post('create')
  async CreateCategory(@Body() body: Category) {
    return await this.CategoryService.Create(body);
  }
  @Delete('delete/:id')
  async DeleteCategory(@Param() id: { id: string }) {
    return this.CategoryService.DeleteCategory(id.id);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { CreateDtoCateg } from './categ.dto';
import { CategService } from './categ.service';

@Controller('api/categ')
export class CategController {
  constructor(
    private readonly categService: CategService,
    private readonly todoService: TodoService,
  ) {}
  @Get(':id')
  getOneCateg(@Param('id') id: string) {
    return this.categService.findOneCateg(id);
  }

  @Post()
  createCateg(@Body() createDto: CreateDtoCateg) {
    return this.categService.createCateg(createDto);
  }
}

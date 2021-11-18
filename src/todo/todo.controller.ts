import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateDtoTodo } from './todo.dto';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './upadate.dto';

@ApiTags('api/swagger')
@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiProperty()
  @Get()
  async getAll() {
    return await this.todoService.getAllTodos();
  }
  @ApiProperty()
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.todoService.getById(id);
  }
  @ApiProperty()
  @HttpCode(200)
  @Post()
  async create(@Body() createDto: CreateDtoTodo) {
    return await this.todoService.createTodo(createDto);
  }
  @ApiProperty()
  @Patch('/:id')
  async update(@Param('id') id: string, @Body() { title, categ }) {
    const todo = await this.todoService.getById(id);
    todo.title = title;
    todo.categ = categ;
    return await this.todoService.updateTodo(todo);
  }
}

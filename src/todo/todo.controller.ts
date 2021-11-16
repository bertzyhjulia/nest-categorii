import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
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
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todoService.updateTodo(id, updateTodoDto);
  }
}

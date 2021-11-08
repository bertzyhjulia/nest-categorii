import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CategService } from 'src/categ/categ.service';
import { CreateDtoTodo } from './todo.dto';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './upadate.dto';

@Controller('api/todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly categService: CategService,
  ) {}

  @Get()
  async getAll() {
    return await this.todoService.getAllTodos();
  }
  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.todoService.getById(id);
  }

  @Post()
  async create(@Body() createDto: CreateDtoTodo, @Req() req: any) {
    return await this.todoService.createTodo(createDto, req.categ);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return await this.todoService.updateTodo(id, updateTodoDto);
  }
}

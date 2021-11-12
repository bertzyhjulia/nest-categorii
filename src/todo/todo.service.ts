import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categs } from 'src/categ/categ.entity';
import { Repository } from 'typeorm';
import { CreateDtoTodo } from './todo.dto';
import { Todos } from './todo.entity';
import { UpdateTodoDto } from './upadate.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todos)
    private todoRepository: Repository<Todos>,
    @InjectRepository(Categs)
    private categRepository: Repository<Categs>,
  ) {}
  async getAllTodos() {
    return await this.todoRepository.find({ relations: ['name'] });
  }
  async createTodo(todoDto: CreateDtoTodo, categ: Categs) {
    const newCateg = await this.todoRepository.create({
      ...todoDto,
      categs: categ,
    });
    const todo = await this.todoRepository.save(newCateg);
    return todo;
  }
  async getById(id: string) {
    const todo = await this.todoRepository.findOne(id, { relations: ['name'] });
    if (todo) {
      return todo;
    }
  }
  async updateTodo(id: number, todo: UpdateTodoDto) {
    await this.todoRepository.update(id, todo);
    const updatedTodo = await this.categRepository.findOne(id, {
      relations: ['categ'],
    });
    if (updatedTodo) {
      return updatedTodo;
    }
  }
}

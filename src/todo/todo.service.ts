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
    return await this.todoRepository.find({ relations: ['todos'] });
  }
  async createTodo( todoDto: CreateDtoTodo) {
    const todos = await this.todoRepository.findOne({
      relations: ['todos'],
    });
    const newCateg = await this.todoRepository.create({
      ...todoDto,
      todos
    });
    const todo = await this.todoRepository.save(newCateg);
    return todo;
  }
  async getById(id: string) {
    const todo = await this.todoRepository.findOne(id, {
      relations: ['todos'],
    });
    if (todo) {
      return todo;
    }
  }
  async updateTodo(id: number, todo: UpdateTodoDto) {
    await this.todoRepository.update(id, todo);
    const updatedTodo = await this.categRepository.findOne(id, {
      relations: ['todos'],
    });
    if (updatedTodo) {
      return updatedTodo;
    }
  }
}

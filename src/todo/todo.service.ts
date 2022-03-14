import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { CreateDtoTodo } from './todo.dto';
import { Todos } from './todo.entity';
import { UpdateTodoDto } from './upadate.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todos)
    private todoRepository: Repository<Todos>,
  ) {}
  async getAllTodos() {
    return await this.todoRepository.find({ relations: ['categ'] });
  }
  async createTodo(todoDto: CreateDtoTodo) {
    const todo = await this.todoRepository.create(todoDto);
    return await this.todoRepository.save(todo);
  }
  async getById(id: string) {
    const todo = await this.todoRepository.findOne(id, {
      relations: ['categ'],
    });
    if (todo) {
      return todo;
    }
  }
  async updateTodo(todo: UpdateTodoDto) {
    return await this.todoRepository.save(todo);
  }
  async getCompletedTodos() {
    return await this.todoRepository.find({
      select: ['status'],
      where: {
        status: 'completed',
      },
      relations: ['categ'],
    });
  }
  async getAnotherTodos() {
    return await this.todoRepository.find({
      select: ['status'],
      where: {
        status: Not('completed'),
      },
      relations: ['categ'],
    });
  }
  async getCateg() {
    return await this.todoRepository.find({
      take: 3,
      where: {
        categId: 1,
      },
      order: {
        id: 'DESC',
      },
      relations: ['categ'],
    });
  }
  async get3todo() {
    return await this.todoRepository.find({
      take: 3,
      order: {
        num: 'DESC',
      },
      relations: ['categ'],
    });
  }
  //async filter()
}

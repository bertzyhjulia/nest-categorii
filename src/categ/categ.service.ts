import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoController } from 'src/todo/todo.controller';
import { Todos } from 'src/todo/todo.entity';
import { Repository } from 'typeorm';
import { CreateDtoCateg } from './categ.dto';
import { Categs } from './categ.entity';

@Injectable()
export class CategService {
  constructor(
    @InjectRepository(Categs)
    private readonly categRepository: Repository<Categs>,
  ) {}
  async createCateg(categDto: CreateDtoCateg) {
    const categ = await this.categRepository.save(categDto);
    return categ;
  }
  async findOneCateg(id: string) {
    const categ = await this.categRepository.findOne(id);
    return categ;
  }
  async get3cated() {
    return await this.categRepository.find({
      select: ['title'],
      relations: ['todos'],
    });
  }
}

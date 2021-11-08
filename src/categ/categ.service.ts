import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDtoCateg } from './categ.dto';
import { Categs } from './categ.entity';

@Injectable()
export class CategService {
  constructor(
    @InjectRepository(Categs)
    private readonly categRepository: Repository<Categs>, // private todoRepository: Repository<Todos>, // private todoService: TodoService,
  ) {}
  async createCateg(categDto: CreateDtoCateg) {
    const categ = await this.categRepository.save(categDto);
    return categ;
  }
  async findOneCateg(id: string) {
    const categ = await this.categRepository.findOne(id);
    return categ;
  }
}

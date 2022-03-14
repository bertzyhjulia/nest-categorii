import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateClientDto, EditClientDto, FilterDto } from './cient.dto';
import { Client } from './client/client.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  async get10Client() {
    return await this.clientRepository.find();
  }
  async createClient(createDto: CreateClientDto) {
    const client = await this.clientRepository.create(createDto);
    return await this.clientRepository.save(client);
  }
  async updateClient(updateDto: EditClientDto) {
    return await this.clientRepository.save(updateDto);
  }
  async getByNameClient(id: string) {
    const client = await this.clientRepository.findOne(id);
    if (client) {
      return client;
    }
  }
  async getFiltering(filter: FilterDto) {
    //const client1 = "bo";
    console.log(filter);
    return await this.clientRepository.find({
      order: { id: 'ASC' },
      select: ['id', 'name', 'lastName', 'email', 'tel', 'date'],
      where: [
        {
          //name: Like(`%${client1}%`),
          name: Like(`%${filter.name}%`),
          lastName: Like(`%${filter.lastName}%`),
          email: Like(`%${filter.email}%`),
          tel: Like(`%${filter.tel}%`),
          date: Like(`%${filter.date}%`),
        },
      ],
    });
  }
  async delete(id: string) {
    return await this.clientRepository.delete(id);
  }
  async getInfoForEditClient(id:string){
    return await this.clientRepository.findOne(id)
  }
}

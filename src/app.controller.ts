import {
  Body,
  Delete,
  Get,
  Param,
  Patch,
  Query,
  Post,
  Render,
  Controller,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateClientDto, FilterDto } from './cient.dto';
import { Client } from './client/client.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  async get() {
    const result = await this.appService.get10Client();
    return { result };
  }

  // @Get('')
  // @Render('index')
  // async getFilter(filter: FilterDto) {
  //   const result = await this.appService.getFiltering(filter);
  //   return { result };
  // }

  @Post('/clientAdd')
  @Render('index')
  async createClient(@Body() createDto: CreateClientDto) {
    const createClient = await this.appService.createClient(createDto);
    return { createClient };
  }

  @Get('/getEditCient:id')
  @Render('index')
  async getInfoToEdit(id: string) {
    const editClient = await this.appService.getInfoForEditClient(id);
    console.log(editClient)
    return { editClient };
  }

  @Patch('/clientEdit')
  @Render('index')
  async updateClient(
    @Param('id') id: string,
    @Body() { name, lastName, tel, date, email, avatar },
  ) {
    const client = await this.appService.getByNameClient(id);
    client.name = name;
    client.lastName = lastName;
    client.tel = tel;
    client.email = email;
    client.date = date;
    client.avatar = avatar;
    const updateClient = await this.appService.updateClient(client);
    return { updateClient };
  }

  @Delete('/delete:id')
  @Render('index')
  async deleteClient(@Param('id') id: string) {
    return await this.appService.delete(id);
  }
}

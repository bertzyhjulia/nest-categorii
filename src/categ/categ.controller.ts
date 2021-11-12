import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDtoCateg } from './categ.dto';
import { CategService } from './categ.service';

@Controller('api/categ')
export class CategController {
  constructor(
    private readonly categService: CategService,
  ) {}
  @Get(':id')
  getOneCateg(@Param('id') id: string) {
    return this.categService.findOneCateg(id);
  }

  @Post()
  createCateg(@Body() createDto: CreateDtoCateg) {
    return this.categService.createCateg(createDto);
  }
}

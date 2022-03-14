import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDtoCateg } from './categ.dto';
import { CategService } from './categ.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
@ApiTags('api/swagger')
@Controller('api/categ')
export class CategController {
  constructor(private readonly categService: CategService) {}
  @Get(':id')
  getOneCateg(@Param('id') id: string) {
    return this.categService.findOneCateg(id);
  }

  @Post()
  createCateg(@Body() createDto: CreateDtoCateg) {
    return this.categService.createCateg(createDto);
  }
  @ApiProperty()
  @Get('//cat')
  async get3cated() {
    return await this.categService.get3cated();
  }
}

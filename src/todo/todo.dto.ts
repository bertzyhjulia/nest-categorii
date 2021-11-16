import { ApiProperty } from '@nestjs/swagger';
import { Categs } from 'src/categ/categ.entity';

export class CreateDtoTodo {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly todos: Categs;
}

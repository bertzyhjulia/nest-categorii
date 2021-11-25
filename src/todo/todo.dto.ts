import { ApiProperty } from '@nestjs/swagger';
import { Categs } from 'src/categ/categ.entity';
import { TodoStatus } from './todoCompleted.enum';

export class CreateDtoTodo {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly status: TodoStatus;

  @ApiProperty()
  readonly categ: Categs;
}
export class GetDtoTodo {
  readonly id: number;
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly status: string;

  @ApiProperty()
  readonly categ: Categs;
}

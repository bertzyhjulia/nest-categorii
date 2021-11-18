import { Categs } from 'src/categ/categ.entity';

export class UpdateTodoDto {
  readonly title: string;
  readonly categ: Categs;
}

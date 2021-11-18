import { ApiProperty } from '@nestjs/swagger';
import { Todos } from 'src/todo/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categs {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @OneToMany(() => Todos, (todo) => todo.categ)
  todos: Todos[];
}

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
  name: string;

  @ApiProperty()
  @OneToMany(() => Todos, (todo) => todo.title)
  todos: Todos[];
}

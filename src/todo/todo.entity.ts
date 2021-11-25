import { ApiProperty } from '@nestjs/swagger';
import { Categs } from 'src/categ/categ.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatus } from './todoCompleted.enum';

@Entity()
export class Todos {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column({ type: 'enum', enum: TodoStatus, default: 'inCompleted' })
  status: string;

  @ApiProperty()
  @ManyToOne(() => Categs, (categ) => categ.todos)
  categ: Categs;
}

import { ApiProperty } from '@nestjs/swagger';
import { Categs } from 'src/categ/categ.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Todos {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @ManyToOne(() => Categs, (categ) => categ.name)
  @JoinColumn({ name: 'categs_id' })
  categs: Categs;
}

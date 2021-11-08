import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todos } from './todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategService } from 'src/categ/categ.service';
import { Categs } from 'src/categ/categ.entity';
import { CategModule } from 'src/categ/categ.module';

@Module({
  imports: [CategModule, TypeOrmModule.forFeature([Todos, Categs])],
  providers: [TodoService, CategService],
  controllers: [TodoController],
  exports: [TodoService],
})
export class TodoModule {}

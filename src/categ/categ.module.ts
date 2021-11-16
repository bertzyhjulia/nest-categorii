import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from 'src/todo/todo.entity';
import { CategController } from './categ.controller';
import { Categs } from './categ.entity';
import { CategService } from './categ.service';

@Module({
  imports: [TypeOrmModule.forFeature([Categs, Todos])],
  providers: [CategService],
  controllers: [CategController],
  exports: [CategService],
})
export class CategModule {}

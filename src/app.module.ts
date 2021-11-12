import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CategModule } from './categ/categ.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TodoModule,
    CategModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './client/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    // {
    //   useFactory: async () =>
    //     Object.assign(await getConnectionOptions(), {
    //       autoLoadEntities: true,
    //     }),
    // }, TypeOrmModule.forFeature([Client])
    TypeOrmModule.forFeature([Client]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

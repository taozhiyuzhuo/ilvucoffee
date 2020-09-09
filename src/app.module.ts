import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [CoffeesModule,TypeOrmModule.forRoot({
    type: 'postgres',
    url:'postgres://localhost:5432/iuvcoffee',
    autoLoadEntities:true,
    synchronize:true
  })],
})
export class AppModule {}

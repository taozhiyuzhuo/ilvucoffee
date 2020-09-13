import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffe-rating.module';
import { CoffeeRatingService } from './coffee-rating/coffee-rating.service';
import { DatabaseModule } from './database/database.module';

@Module({
  controllers: [AppController],
  providers: [AppService, CoffeeRatingService],
  imports: [CoffeesModule,TypeOrmModule.forRoot({
    type: 'postgres',
    url:'postgres://localhost:5432/iuvcoffee',
    autoLoadEntities:true,
    synchronize:true
  }), CoffeeRatingModule, DatabaseModule],
})
export class AppModule {}

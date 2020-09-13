import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffee.contants';

class DevelopmentConfigService {
}

class ProductionConfigService {

}

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  controllers: [CoffeesController],
  providers: [

    CoffeesService,
    CoffeeBrandsFactory,
    // { provide: COFFEE_BRANDS, useValue: ['milk', 'cholocat'] },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: (brandFactory: CoffeeBrandsFactory) => brandFactory.create(),
    //   inject: [CoffeeBrandsFactory],
    // },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: async (connection: Connection): Promise<string[]> => {
    //     return await Promise.resolve(['buddy brew', 'nescafe']);
    //   },
    //   inject: [Connection],
    // },
    {
      provide:COFFEE_BRANDS,
      useFactory:()=>['buddy brew', 'nescafe'],
      scope:Scope.TRANSIENT
    },
    {
      provide: 'ConfigService',
      useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService,
    }],
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  exports: [CoffeesService],
})
export class CoffeesModule {
}

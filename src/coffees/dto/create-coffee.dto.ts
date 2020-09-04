/* CreateCoffeeDto */
import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}

/* UpdateCoffeeDto */
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

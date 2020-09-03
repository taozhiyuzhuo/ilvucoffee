import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #[${id}] coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(id: string, body) {
    return `This action updates #${id} coffee`;
  }
}

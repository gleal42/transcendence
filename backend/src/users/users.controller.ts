import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/createuser')
  create(@Body() createUserDto: any) {
    return this.usersService.createUser(createUserDto);
  }
  
  @Get('/getUsers')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/getUsers/:nick')
  findbyusername(@Param('nick') nick_: string) {
    return this.usersService.findbyuser(nick_);
  }
/* 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }*/
}

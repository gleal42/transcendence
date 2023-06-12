import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { friend } from './friend.entity';
import { UsersService } from 'src/users/users.service';
import { friendService } from './friend.service';

@Controller('friends')
export class friendsController {
  constructor(private readonly friendService: friendService) {}
  
 @Post('/create')
  create(@Body() createUserDto: any) {
    return this.friendService.createfriend(createUserDto);
  }

  @Get('/getfriends')
  findAll() {
    return this.friendService.findAll();
  }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.usersService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
}

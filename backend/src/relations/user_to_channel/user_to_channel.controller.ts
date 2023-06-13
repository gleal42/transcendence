import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserToChannelService } from './user_to_channel.service';


@Controller('usertochannel')
export class UserToChannelController {
  constructor(private readonly userToChannelService: UserToChannelService) {}
  
 @Post('/joinchannel')
  create(@Body() createFriendDto: any) {
    return this.userToChannelService.joinchannel(createFriendDto);
  }

  // @Get('/getfriends')
  // findAll() {
  //   return this.friendService.findAll();
  // }

  // @Get('/:id')
  // findOne(@Param('id') id: string) {
  //   return this.friendService.findByUserId(+id);
  // }
  
  //   @Delete('/deletefriends/:id1/:id2')
  //   remove(@Param('id1') id1: number,@Param('id2') id2: number ) {
  //     return this.friendService.delete_friend(id1,id2);
  //   }

}

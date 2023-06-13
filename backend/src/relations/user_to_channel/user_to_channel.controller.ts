import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserToChannelService } from './user_to_channel.service';


@Controller('usertochannel')
export class UserToChannelController {
  constructor(private readonly userToChannelService: UserToChannelService) {}
  
 @Post('/joinchannel')
  create(@Body() createFriendDto: any) {
    return this.userToChannelService.joinchannel(createFriendDto);
  }
    
  @Delete('/leavechannel/:id_us/:id_ch')
    remove(@Param('id_us') id_us: number,@Param('id_ch') id_ch: number ) {
      return this.userToChannelService.leavechannel(id_us,id_ch);
    }

  @Get('/getusersonchannel/:id')
  findAll(@Param('id') ch_id: number) {
    return this.userToChannelService.usersonchannel(ch_id);
  }

  // @Get('/:id')
  // findOne(@Param('id') id: string) {
  //   return this.friendService.findByUserId(+id);
  // }
  

}

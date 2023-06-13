import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatService } from './chat.service';


@Controller('chat')
export class ChatController {
  constructor(private readonly ChatService: ChatService) {}

  @Get('/msginchannel/:id')
  findAll(@Param('id') id: number) {
    return this.ChatService.findMessagesByChannelId(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ChatService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateChannelDto: UpdateChannelDto) {
  //   return this.ChatService.update(+id, updateChannelDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ChatService.remove(+id);
  // }
}

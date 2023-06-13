import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Channel } from './channel.entity';

@Injectable()
export class ChannelsService {

   constructor(
   @InjectRepository(Channel) private chatRepository: Repository<Channel>,
 ) {}
 create(createChannelDto: any) {
    return this.chatRepository.save(createChannelDto);
  }

  // findAll() {
  //   return `This action returns all channels`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} channel`;
  // }

  // update(id: number, updateChannelDto: UpdateChannelDto) {
  //   return `This action updates a #${id} channel`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} channel`;
  // }
}

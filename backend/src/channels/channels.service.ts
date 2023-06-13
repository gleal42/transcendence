import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,MoreThan } from 'typeorm';
import { Channel } from './channel.entity';

@Injectable()
export class ChannelsService {

   constructor(
   @InjectRepository(Channel) private ChannelsRepository: Repository<Channel>,
 ) {}
 create(createChannelDto: any) {
    return this.ChannelsRepository.save(createChannelDto);
  }

  async all_channel(){
    return await this.ChannelsRepository.find({
     // 0 is private message, it's supposed to not appear
      where: {type: MoreThan(0)}
    })
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

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserToChannel } from './user_to_channel.entity';
 
@Injectable()
export class UserToChannelService {
 constructor(
   @InjectRepository(UserToChannel) private UserToChannelRepository: Repository<UserToChannel>,
 ) {}

   async joinchannel(UserToChannel: any){
   return await this.UserToChannelRepository.save(UserToChannel);
 }

//  async createMessage(UserToChannel: UserToChannel): Promise<UserToChannel> {
//    return await this.UserToChannelRepository.save(UserToChannel);
//  }
 
//  async getMessages(): Promise<UserToChannel[]> {
//    return await this.UserToChannelRepository.find();
//  }
}
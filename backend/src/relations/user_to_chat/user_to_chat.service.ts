import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserToChatChannel } from './user_to_chat.entity';
 
@Injectable()
export class userToChatService {
 constructor(
   @InjectRepository(UserToChatChannel) private UserToChatChannelRepository: Repository<UserToChatChannel>,
 ) {}
 async createMessage(UserToChatChannel: UserToChatChannel): Promise<UserToChatChannel> {
   return await this.UserToChatChannelRepository.save(UserToChatChannel);
 }
 
 async getMessages(): Promise<UserToChatChannel[]> {
   return await this.UserToChatChannelRepository.find();
 }
}
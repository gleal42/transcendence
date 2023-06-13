import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './chat.entity';
 
@Injectable()
export class ChatService {
 constructor(
   @InjectRepository(Chat) private chatRepository: Repository<Chat>,
 ) {}
 async createMessage(chat: Chat): Promise<Chat> {
   return await this.chatRepository.save(chat);
 }
 
 async findMessagesByChannelId(id_given : number){
  const messages = await this.chatRepository.find({
    where: {channel: id_given}
  });
  return messages
 }

 async getMessages(): Promise<Chat[]> {
   return await this.chatRepository.find();
 }
}
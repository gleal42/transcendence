import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './messages.entity';
 
@Injectable()
export class MessagesService {
 constructor(
   @InjectRepository(Messages) private messagesRepository: Repository<Messages>,
 ) {}
 async createMessage(Messages: Messages): Promise<Messages> {
   return await this.messagesRepository.save(Messages);
 }
 
 async findMessagesByChannelId(id_given : number){
  const messages = await this.messagesRepository.find({
    where: {id: id_given}
  });
  return messages
 }

 async getMessages(): Promise<Messages[]> {
   return await this.messagesRepository.find();
 }
}
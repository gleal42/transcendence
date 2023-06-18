import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './db_interactions_modules/messages/messages.entity';
 
@Injectable()
export class AppService {
 constructor(
   @InjectRepository(Messages) private messagesRepository: Repository<Messages>,
 ) {}
 async createMessage(Messages: Messages): Promise<Messages> {
   return await this.messagesRepository.save(Messages);
 }
 
 async getMessages(): Promise<Messages[]> {
   return await this.messagesRepository.find();
 }
}
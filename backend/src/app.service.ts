import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Messages } from './db_interactions_modules/messages/messages.entity';
import { User } from './db_interactions_modules/users/user.entity';
 
@Injectable()
export class AppService {
 constructor(
   @InjectRepository(Messages) private messagesRepository: Repository<Messages>,
   @InjectRepository(User)private userRepository: Repository<User>
 ) {}
 async createMessage(Messages: any){
  const user= await this.userRepository.findOne({where: {
     id:  Messages.authorId }
    
  });
  console.log(user)
   return await this.messagesRepository.save(Messages);
 }
 
 async getMessages(): Promise<Messages[]> {
   return await this.messagesRepository.find();
 }
}
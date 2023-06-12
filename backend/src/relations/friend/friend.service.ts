import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { friend } from './friend.entity';
 
@Injectable()
export class friendService {
 constructor(
   @InjectRepository(friend) private friendRepository: Repository<friend>,
 ) {}
 async createMessage(friend: friend): Promise<friend> {
   return await this.friendRepository.save(friend);
 }
 
 async getMessages(): Promise<friend[]> {
   return await this.friendRepository.find();
 }
}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { friend } from './friend.entity';
 
@Injectable()
export class friendService {
 constructor(
   @InjectRepository(friend) private friendRepository: Repository<friend>,
 ) {}
 async createfriend(createfriendDto: any) {
   return await this.friendRepository.save(createfriendDto);
 }
 async findAll() {
  return await this.friendRepository.find({relations: ['user1Id', 'user2Id' ]});
}

//  async getMessages(): Promise<friend[]> {
//    return await this.friendRepository.find();
//  }
}
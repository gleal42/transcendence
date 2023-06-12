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

async findByUserId(userId: number) {
  const friendship = await this.friendRepository.find({
    where: [{ user1Id: { id: userId }},
            {user2Id: {id: userId}}
            ],
    relations:['user1Id', 'user2Id']
  });
  return friendship
}

//  async getMessages(): Promise<friend[]> {
//    return await this.friendRepository.find();
//  }
}
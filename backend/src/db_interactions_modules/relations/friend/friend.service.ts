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

async delete_friend(id1: number,id2: number) {
  
  console.log(id1," ",id2)
  const friendship = await this.friendRepository.findOne({
    where: [{ user1Id: {id: id1}, user2Id: {id: id2}}, 
           { user1Id: {id: id2}, user2Id: {id: id1}}
          ], 
    relations:['user1Id', 'user2Id']
});
  await this.friendRepository.remove(friendship)
  return friendship
}
}
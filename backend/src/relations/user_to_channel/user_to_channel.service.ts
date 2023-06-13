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

    async leavechannel(id_us: number, id_ch: number){
      const channel_to_leave = await this.UserToChannelRepository.find({
        where: { user_id: { id: id_us },
                channel_id: {id: id_ch}
              }
                ,
        relations:['user_id', 'channel_id']
      });
      
     return await this.UserToChannelRepository.remove(channel_to_leave)
    }

  

//  async createMessage(UserToChannel: UserToChannel): Promise<UserToChannel> {
//    return await this.UserToChannelRepository.save(UserToChannel);
//  }
 
//  async getMessages(): Promise<UserToChannel[]> {
//    return await this.UserToChannelRepository.find();
//  }
}
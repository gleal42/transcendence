import { Module } from '@nestjs/common';
import { friend } from './friend.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { friendsController } from './friend.controller';
import { friendService } from './friend.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([friend])
    ],
    controllers: [friendsController],
    providers: [friendService]
})
export class FriendModule {}

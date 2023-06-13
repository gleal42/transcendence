import { Module } from '@nestjs/common';
import { Chat } from './chat.entity';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
    imports: [
    TypeOrmModule.forFeature([Chat])
],
  controllers: [ChatController],
  providers: [ChatService]})
export class ChatModule {}

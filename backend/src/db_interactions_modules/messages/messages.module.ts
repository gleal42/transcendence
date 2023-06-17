import { Module } from '@nestjs/common';
import { Messages } from './messages.entity';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({  
    imports: [
    TypeOrmModule.forFeature([Messages])
],
  controllers: [MessagesController],
  providers: [MessagesService]})
export class MessagesModule {}

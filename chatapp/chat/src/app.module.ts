import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app/app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './chat/chat.entity';
import { ChatModule } from './chat/chat.module';
import { UsersModule } from './users/users.module';
import { GameHistoryModule } from './game_history/game_history.module';
import { ChannelsModule } from './channels/channels.module';
import { User } from './users/user.entity';
import { GameHistory } from './game_history/game_history.entity';
import { Channel } from './channels/channel.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'dmarceli',
      password: 'dmarceli',
      database: 'dmarceli',
      entities: [User,Chat, GameHistory, Channel],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Chat, GameHistory, Channel]),
    ChatModule,
    UsersModule,
    GameHistoryModule,
    ChannelsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './db_interactions_modules/app/app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './db_interactions_modules/users/users.module';
import { GameHistoryModule } from './db_interactions_modules/game_history/game_history.module';
import { ChannelsModule } from './db_interactions_modules/channels/channels.module';
import { User } from './db_interactions_modules/users/user.entity';
import { GameHistory } from './db_interactions_modules/game_history/game_history.entity';
import { Channel } from './db_interactions_modules/channels/channel.entity';
import { friend } from './db_interactions_modules/relations/friend/friend.entity';
import { FriendModule } from './db_interactions_modules/relations/friend/friend.module';
import { UserToChannel } from './db_interactions_modules/relations/user_to_channel/user_to_channel.entity';
import { UserToChannelModule } from './db_interactions_modules/relations/user_to_channel/user_to_channel.module';
import { ConfigModule } from '@nestjs/config';
import { Messages } from './db_interactions_modules/messages/messages.entity';
import { MessagesModule } from './db_interactions_modules/messages/messages.module';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User,Messages, GameHistory, Channel, friend, UserToChannel ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Messages, GameHistory, Channel, friend, UserToChannel]),
    MessagesModule,
    UsersModule,
    GameHistoryModule,
    ChannelsModule,
    FriendModule,
    UserToChannelModule
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}

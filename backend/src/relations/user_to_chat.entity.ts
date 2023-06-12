import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Chat } from '../chat/chat.entity';

@Entity()
export class UserToChatChannel {
  @PrimaryGeneratedColumn()
  userToChatChannel_id: number;

  @ManyToOne(() => User, user => user.user_id)
  user: User;

  @ManyToOne(() => Chat, chat => chat.chat_id)
  chat: Chat;

  @Column()
  is_admin: boolean;

  @Column()
  is_muted: boolean;

  @Column()
  is_banned: boolean;
}

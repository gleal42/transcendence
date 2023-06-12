import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Chat } from 'src/chat/chat.entity';

@Entity()
export class UserToChatChannel {
  @PrimaryGeneratedColumn()
  userToChatChannel_id: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @ManyToOne(() => Chat, chat => chat.id)
  chat: Chat;

  @Column()
  is_admin: boolean;

  @Column()
  is_muted: boolean;

  @Column()
  is_banned: boolean;
}
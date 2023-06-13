import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Channel } from 'src/channels/channel.entity';

@Entity()
export class UserToChannel {
  @PrimaryGeneratedColumn()
  userToChatChannel_id: number;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  user_id: User;

  @ManyToOne(() => Channel, channel => channel.id)
  @JoinColumn({ name: 'channel_id' })
  channel_id: Channel;

  @Column()
  is_owner: boolean;

  @Column()
  is_admin: boolean;

  @Column()
  is_muted: boolean;

  @Column()
  is_banned: boolean;
}
import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class friend {
  @PrimaryGeneratedColumn()
  friendship_id: number;

  @ManyToOne(() => User, user => user.id)
  user1Id: User;

  @ManyToOne(() => User, user => user.id)
  user2Id: User;
}

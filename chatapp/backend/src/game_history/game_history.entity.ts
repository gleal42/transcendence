import { User } from 'src/users/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn
   } from 'typeorm';
    
   @Entity()
   export class GameHistory {
    @PrimaryGeneratedColumn()
    match_id: number;
    
    @OneToOne(() => User)
    @JoinColumn()
    user_id_winner: User;
   
    @OneToOne(() => User)
    @JoinColumn()
    user_id_loser: User;

    @Column()
    time_begin: Date;
    
    @Column()
    time_end: Date;

    @Column()
    points: number;
   }


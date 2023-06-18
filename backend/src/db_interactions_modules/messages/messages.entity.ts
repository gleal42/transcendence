import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
   } from 'typeorm';
import { User } from '../users/user.entity';
import { Channel } from '../channels/channel.entity';
    
   @Entity()
   export class Messages {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    //TODO: author: User;
    author: string;
        
    @Column()
    message: string;
    
    @CreateDateColumn()
    time: Date;

    @Column()
    //TODO: author: Channel;
    channel: number;
   }
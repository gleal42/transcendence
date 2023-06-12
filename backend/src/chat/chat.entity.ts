import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
   } from 'typeorm';
    
   @Entity()
   export class Chat {
    @PrimaryGeneratedColumn()
    chat_id: number;
    
    @Column()
    author: string;
    
    @Column()
    message: string;
    
    @CreateDateColumn()
    time: Date;

    @Column()
    channel: number;
   }
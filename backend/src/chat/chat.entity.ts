import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
   } from 'typeorm';
    
   @Entity()
   export class Chat {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    author: string;
    
    @Column()
    message: string;
    
    @CreateDateColumn()
    time: Date;

    @Column()
    channel: number;
   }
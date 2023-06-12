import { User } from 'src/users/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToMany,
    JoinTable
   } from 'typeorm';
    
   @Entity()
   export class Channel {
    @PrimaryGeneratedColumn()
    channel_id: number;
    
    @Column()
    type: number;
    
    @Column()
    channel_name: string;

    @Column({nullable: true})
    password: string;
    
    @ManyToMany(() => User)
    @JoinTable()
    admins: User[];

    @Column()
    max_connected_users: number;

    @ManyToMany(() => User)
    @JoinTable()
    users_joined: User[];
   }




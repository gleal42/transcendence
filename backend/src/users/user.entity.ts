import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    JoinTable
   } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nick: string;
    
    @Column()
    intra_nick: string;

    @Column()
    avatar: string;
    
    @Column()
    lost_games: number;
      
    @Column()
    won_games: number;

    @Column()
    xp_total: number;
    
    @CreateDateColumn()
    creation_date: Date;

    @CreateDateColumn()
    last_joined_date: Date;
    
    // @ManyToMany(() => User)
    // @JoinTable()
    // friends: User[];

}

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { AppDataSource } from "../config/data-Sorce";



@Entity({
    name: "turns"
})
export class Turn {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:100})
    type:string

    @Column()
    status: boolean
    
    @Column()
    date:string

    @ManyToOne(() => User, (user) => user.turns)
    user: User
}


import { Column, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credentials"
import { Turn } from "./Turn"


@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:100})
    name:string

    @Column()
    email:string

    @Column()
    address:string

    @Column()
    birthdate: string
    
    @OneToMany(() => Turn, (turn) => turn.user, { cascade: true, onDelete: 'CASCADE' })
    turns: Turn[]
    
    @OneToOne(()=> Credential, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    credential: Credential

    @DeleteDateColumn()
    deleteAt?: Date  
}
import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credentials";
import { Turn } from "../entities/Turn";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Paria!481632",
    database: "demo_typeorm",
    // dropSchema:true,
    synchronize: true,
    logging:["error"],
    entities: [User, Credential, Turn],
    subscribers: [],
    migrations: [],
})

export const Usermodel = AppDataSource.getRepository(User);
export const Credentialmodel = AppDataSource.getRepository(Credential);
export const TurnModel = AppDataSource.getRepository(Turn)

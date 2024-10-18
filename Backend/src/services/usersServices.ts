import UserDto from "../dto/UserDto";
import { createCredencial } from "./credentialsService";
import {Credentialmodel, Usermodel } from "../config/data-Sorce";
import { User } from "../entities/User";



export const createUsersService = async (userData: UserDto): Promise<User | string | undefined> => {
    try {
        const user: User = await Usermodel.create(userData);
        const {username, password} = userData
        const userId = user.id
        const credential = await createCredencial({username, password, userId});
        if(!credential){throw new Error('No se pudo obtener las credenciales')}
        user.credential = credential

        await Usermodel.save(user)
        return user;
    } catch (error) {
        throw error
    }


}
export const getUsersService = async (): Promise<User[] | undefined> => {
    try {
        const users: User[] = await Usermodel.find({
            relations:{
                credential:true,
                turns:true
            }
        })
        return users
    } catch (error) {
        throw error
    }
}
export const deleteUsersService = async (id:number): Promise<void> => {
    try {
        await Usermodel.softDelete(id)
        return;
    } catch (error) {
        throw error
    }
}

export const getUserById = async (id:number) => {
    try {
        const user = await Usermodel.findBy({id})
        if(user){return user}
    } catch (error) {
        throw error
    }
}

interface a {
    username: string;
    password: string;
  }
export const getMyuserService = async ({username, password}:a) => {
    try {
        const credential = await Credentialmodel.findOneBy({username})
        if (!credential){
            return undefined
        }
        if(credential?.password === password){
            const user = await  Usermodel.findOne({
                where: { id: credential.id },
                relations:{
                    credential:true,
                    turns:true
                },
            })
            return user
        }else{
            return null
        }
    } catch (error) {
    
        throw error
    }
}


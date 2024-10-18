import { Request, Response } from "express"
import { createUsersService, deleteUsersService, getMyuserService, getUsersService } from "../services/usersServices"
import { User } from "../entities/User";

export const createUsers = async (req: Request, res: Response)=> {
    try {
        const {name, email,address,birthdate, username, password } = req.body;
        const newUser = await createUsersService({name, email, address, birthdate, username, password });
        res.status(201).json(newUser)
    } catch (error:any) {
         res.status(400).json({error: error.message})
       
    }
}
export const getMyuser = async (req:Request , res:Response)=>{
    try {
        const {username, password} = req.body;
        const user = await getMyuserService({username, password})
        if(user === undefined){ res.status(404).json({ message: 'User no encontrado' })}
        if(user === null){ res.status(400).json({ message: 'Contraseña Incorrecta' })}
        if(user) res.status(201).json(user)    
    } catch (error:any) { 
        res.status(400).json({error: error.message})
        
    } 
}
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users:User[] | string | undefined = await getUsersService()
        res.status(200).json(users)
    } catch (error:any) {
        res.status(404).json({error: error.message})
       
    }
}
export const deleteUsers = async (req: Request, res: Response)=> {
    try {
        const {id} = req.params
        await deleteUsersService(Number(id));
        res.status(200).json({message: 'eliminado'})
    } catch (error:any) {
        res.status(500).json({error: error.message})
    }
}

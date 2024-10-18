import TurnDto from "../dto/TurnDto";
import { TurnModel, Usermodel } from "../config/data-Sorce";
import { User } from "../entities/User";
import { Turn } from "../entities/Turn";


export const getAllTurnsService = async (userId:number) => {
    try {
        const user:User | null = await Usermodel.findOneBy({
        id: userId
    })
    if(!user){throw new Error("Usuario no encontrado")}
    
    
        const myTurns:Turn[] = await TurnModel.find({
            where:{
                user:{
                    id:userId
                }
            }
        })
        return myTurns
    } catch (error) {
        throw error
    }
}

export const getTurnByIdService = async (turnId:number) => {
    try {
        const turn = await TurnModel.findOneBy({id:turnId})
    } catch (error) {
        throw error
    }
}
export const createTurnService = async (dataTurn:TurnDto) => {
    try {
        const newTurn:Turn = await TurnModel.create(dataTurn);
        await TurnModel.save(newTurn)
        const user:User | null = await Usermodel.findOneBy({id:dataTurn.userId})
        
        if(user){
            newTurn.user = user
            await TurnModel.save(newTurn)
        }
        return newTurn
    } catch (error) {
        throw error
    }

}
export const cancelarTurnoService = async (id:number) => {
    try {
        const turn = await TurnModel.findOneBy({id})
        if(!turn || turn === null){ throw new Error("No se encontro el Turno")}
        if(!turn.status){return}
        turn.status = false
        await TurnModel.save(turn)
        return;
    } catch (error) {
        throw error
    }
}


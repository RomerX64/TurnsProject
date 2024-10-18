import { Request,Response } from "express";
import { getAllTurnsService, getTurnByIdService, createTurnService, cancelarTurnoService } from "../services/turnsServices";

export const getAllTurns = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        const userId = Number(id)
        const turns = await getAllTurnsService(userId)
        res.status(200).json(turns)
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
}
export const getTurnById = async (req: Request, res:Response) => {
    try {
    const {id} = req.params
    const turnId = Number(id)
    const turn = await getTurnByIdService(turnId);
    res.status(200).json(turn)

    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
}
export const createTurn = async (req: Request, res:Response) => {
    try {
        const {date, type, userId} = req.body
        const status = true
        const newTurn = await createTurnService({date, type, status, userId})
        res.status(200).json(newTurn)
    } catch (error:any) {
        res.status(400).json({error: error.message})
    }
}
export const cancelarTurno = async (req: Request, res:Response) => {
    try {
        const {id} = req.params
        await cancelarTurnoService(Number(id))
       res.status(200).json({message:'Se cancelo su turno'})
    } catch (error:any) {
        res.status(400).json({error: error.message})
        
    }
}



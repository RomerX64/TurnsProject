import { Router } from "express";
import { cancelarTurno, createTurn, getAllTurns, getTurnById } from "../controllers/turnsController";




const turnsRouter: Router = Router();

turnsRouter.get("/:id", getAllTurns);
turnsRouter.get("/:id", getTurnById);

turnsRouter.post("/", createTurn);
turnsRouter.put("/:id", cancelarTurno);


export default turnsRouter

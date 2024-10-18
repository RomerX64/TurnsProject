import { Router } from "express";
import userRouter from "./userRouter";
import turnsRouter from "./turnsRouter";
import { getUsers } from "../controllers/userController";





const router: Router = Router();

router.use("/users",userRouter)
router.use("/turns",turnsRouter)

export default router;
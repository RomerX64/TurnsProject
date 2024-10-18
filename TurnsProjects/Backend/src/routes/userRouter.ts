import { getUsers, createUsers, deleteUsers, getMyuser } from "../controllers/userController";
import { Router } from "express";

const userRouter:Router = Router();

userRouter.get("/", getUsers)
userRouter.post("/", getMyuser)
userRouter.post("/new", createUsers)
userRouter.delete("/:id", deleteUsers)

export default userRouter
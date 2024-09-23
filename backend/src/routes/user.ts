import express from "express";
import { register, login, profile } from "../controllers/user";
import { isAuth } from "../middlewares/isAuth";

const userRouter = express.Router();

// routes
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/my-profile",isAuth, profile);

export default userRouter;

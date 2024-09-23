import express from "express";
import { register, login, profile, getAllUsers } from "../controllers/user";
import { isAuth } from "../middlewares/isAuth";

const userRouter = express.Router();

// routes
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/my-profile", isAuth, profile);
userRouter.get("/all", getAllUsers);

export default userRouter;

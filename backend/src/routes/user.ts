import express from "express";
import { register, login, profile, getAllUsers } from "../controllers/user";
import { isAuth } from "../middlewares/isAuth";
import { upload } from "../middlewares/multer";

const userRouter = express.Router();

// routes
userRouter.post("/register",upload.single("image"), register);
userRouter.post("/login", login);
userRouter.post("/my-profile", isAuth, profile);
userRouter.get("/all", getAllUsers);

export default userRouter;

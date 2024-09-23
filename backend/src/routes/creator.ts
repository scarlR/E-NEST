import express from "express";
import { beCreator, getAllCreators } from "../controllers/creator";
import { isAuth } from "../middlewares/isAuth";


const creatorRouter = express.Router();

creatorRouter.post("/be-creator", isAuth, beCreator)
creatorRouter.get("/all",getAllCreators)

export default creatorRouter
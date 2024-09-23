import express from "express";
import {
  beCreator,
  getAllCreators,
  createCourse,
} from "../controllers/creator";
import { isAuth } from "../middlewares/isAuth";
import { upload } from "../middlewares/multer";

const creatorRouter = express.Router();

creatorRouter.post("/be-creator", isAuth, beCreator);
creatorRouter.get("/all", getAllCreators);
creatorRouter.post("/create-course",upload.single("image"),isAuth,createCourse);

export default creatorRouter;

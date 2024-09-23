import express from "express";
import { isAuth } from "../middlewares/isAuth";
import { post, getAllTestimonial } from "../controllers/testimonial";

const testimonialRouter = express.Router();

// routes
testimonialRouter.post("/post", isAuth, post);
testimonialRouter.get("/all",getAllTestimonial);



export default testimonialRouter;

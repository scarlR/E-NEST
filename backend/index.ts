import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./src/db/db";
import userRouter from "./src/routes/user";
import courseRouter from "./src/routes/course";
import creatorRouter from "./src/routes/creator";
import testimonialRouter from "./src/routes/testimonial";

dotenv.config();
const port  = process.env.PORT || 3005;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//apis
app.use("/api/user", userRouter);
app.use("/api/creator", creatorRouter);
app.use("/api/course", courseRouter);
app.use("/api/testimonial", testimonialRouter);


app.listen(port, async () => {  
    console.log(`Server is running on port ${port}`);
    await connectDB();
});

import mongoose from "mongoose";
import { userType } from "../types/user.model";

const schema = new mongoose.Schema<userType>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
    },
  { timestamps: true }
);

export const User = mongoose.model<userType>("User", schema);

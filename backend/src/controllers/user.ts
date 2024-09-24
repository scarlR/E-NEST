import { Request, Response } from "express";
import { User } from "../models/user";
import { userType } from "../types/user.model";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { cloudinary } from "../utils/cloudinary";


export const register = async (req: Request, res: Response) => {
    const { name, email, password, designation } = req.body;
    console.log(req.body)
    if (!name || !email || !password) {
     
        return res.status(400).json({ error: "All fields are required" });
    }
    let image = req.file?.path;
    const imageUpload = await cloudinary.uploader.upload(image as string);
    const imageUrl = imageUpload.url;
    console.log(imageUrl)

        try {
            const user = await User.findOne({ email });
             if (user) {
               return res.status(400).json({ error: "User already exists" });
             }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser: userType = await User.create({
              email,
                name,
              image: imageUrl,
              password: hashedPassword,
              designation,
            });

            const token = sign({ id: newUser._id }, process.env.JWT_SECRET as string, {
                expiresIn: "10d",
            });
            res.status(200).json({
                token: token,
                message: "User created successfully"
            });
            
            
        } catch (error) {
            return res.status(500).json({
                error: "Something went wrong while registering"
            });    
        }
    
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const token = sign({ id: user._id }, process.env.JWT_SECRET as string, {
            expiresIn: "10d",
        });
        res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong while logging in" });
    }
}

export const profile =async (req: Request, res: Response) => {
    const user = req.body.user;
    res.status(200).json({ user });
}


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    console.log("ko");
    const users = await User.find({ role: "user" });
    return res.status(200).json({ users });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Spmething went wrong while getting all users",
        error,
      });
  }
};
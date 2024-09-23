import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import { verify } from "jsonwebtoken";

export const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }
    const decoded = verify(token as string, process.env.JWT_SECRET as string);
    const user = await User.findById((decoded as any).id);
    req.body.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};   
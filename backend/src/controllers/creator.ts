import { Request, Response } from "express";
import { User } from "../models/user";


export const beCreator = async (req: Request, res: Response) => {
  const { designation } = req.body;

  try {
    const user = req.body.user;
    user.role = "creator";
    user.designation = designation;
    user.totalCoursesCreated = 0;
    await user.save();

    return res
      .status(200)
      .json({ message: "User successfully registered as creator", user });
  } catch (error) {
      return res
        .status(500)
        .json({ message: "Spmething went wrong while becoiming a creator", error });
  }
};

export const getAllCreators = async (req: Request, res: Response) => {
    try {
      console.log("ko")
    const creators = await User.find({ role: "creator" });
    return res.status(200).json({ creators });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Spmething went wrong while getting all creators", error });
  }
}
import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    // It will call service function to get this data
    const result = await userServices.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    // It will call service function to get this data
    const result = await userServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: "All User retrieved successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    // It will call service function to get this data
    const result = await userServices.getUserFromDB(userID);
    res.status(200).json({
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userControllers = { createUser, getAllUser, getUser };

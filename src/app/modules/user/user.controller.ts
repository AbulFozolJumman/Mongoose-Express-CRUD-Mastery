import { Request, Response } from "express";
import { userServices } from "./user.service";
import userValidationSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    // Zod validation while creating user
    const value = userValidationSchema.parse(user);

    // It will call service function to get this data
    const result = await userServices.createUserIntoDB(value);
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
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // It will call service function to get this data
    const result = await userServices.getUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // It will call service function to get this data
    const result = await userServices.deleteUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userControllers = { createUser, getAllUser, getUser, deleteUser };

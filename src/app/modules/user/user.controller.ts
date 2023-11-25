/* eslint-disable no-console */
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
    res.status(500).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
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
    res.status(500).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
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
    res.status(500).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // Zod validation while creating user
    const value = userValidationSchema.parse(userData);

    const userId = value.userId;
    const result = await userServices.updateUserInDB(userId, value);
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
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
    res.status(500).json({
      success: false,
      message: "User not found!",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

const getUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    // It will call service function to get this data
    const result = await userServices.getUserOrdersFromDB(userId);
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Order not found!",
      error: {
        code: 404,
        description: "Order not found!",
      },
    });
  }
};

export const userControllers = {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  getUserOrders,
};

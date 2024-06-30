/* eslint-disable no-console */
import { Request, Response } from "express";
import { userServices } from "./user.service";
import UserValidationSchema from "./user.validation";
import { Orders } from "./user.interface";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    // Zod validation while creating user
    const userData = UserValidationSchema.parse(user);

    // It will call service function to get this data
    const result = await userServices.createUserIntoDb(userData);
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
    const result = await userServices.getAllUsersFromDb();
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
    const id = req.params.userId;
    // It will call service function to get this data
    const result = await userServices.getSingleUserFromDb(id);
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
    const value = UserValidationSchema.parse(userData);

    const userId = value.userId;
    const result = await userServices.updateSingleUserFromDb(userId, value);
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
    const id = req.params.userId;
    // It will call service function to get this data
    const result = await userServices.deleteSingleUserFromDb(id);
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
    const result = await userServices.getSingleUserFromDb(userId);
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

const addUserOrders = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const order: Orders = req.body;
  try {
    const result = await userServices.putOrderIntoDb(order, userId);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
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

const userOrdersTotalPrice = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const result = await userServices.calculateOrdersPriceFromDb(userId);
    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
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
  addUserOrders,
  userOrdersTotalPrice,
};

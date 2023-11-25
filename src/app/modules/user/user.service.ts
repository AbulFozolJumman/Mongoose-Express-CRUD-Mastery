import { IUser, Order } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (user: IUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

const getUserFromDB = async (userId: string) => {
  const result = await User.findOne({ userId });
  return result;
};

const updateUserInDB = async (userId: number, userData: IUser) => {
  const result = await User.updateOne({ userId }, userData);
  return result;
};

const deleteUserFromDB = async (userId: string) => {
  const result = await User.deleteOne({ userId });
  return result;
};

const getUserOrdersFromDB = async (userId: string) => {
  const user = await User.findOne({ userId });
  return user?.orders;
};

const addOrdersInUserInDB = async (order: Order, userId: string) => {
  const user = await User.findOne({ userId });

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.orders || !Array.isArray(user.orders)) {
    user.orders = [order];
  } else {
    user.orders.push(order);
  }
  const result = await user.save();
  return result;
};

const userOrdersTotalPriceFromDB = async (userId: string) => {
  const result = await User.aggregate([
    { $match: { userId: userId } },
    { $unwind: "$orders" },
    {
      $group: {
        _id: null,
        totalPrice: {
          $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
      },
    },
  ]);
  return result[0];
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
  getUserOrdersFromDB,
  addOrdersInUserInDB,
  userOrdersTotalPriceFromDB,
};

import { IUser } from "./user.interface";
import { User } from "./user.model";
import config from "../../config";
import bcrypt from "bcrypt";

//create user
const createUserIntoDb = async (userData: IUser) => {
  const result = (await User.create(userData)).$set("password", undefined);
  return result;
};

//get all user
const getAllUsersFromDb = async () => {
  const result = await User.find().select({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  return result;
};

//get single user
const getSingleUserFromDb = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error("User does not Exist");
  }
  const result = await User.findOne({ userId }).select({
    password: 0,
    orders: 0,
  });
  return result;
};

//delete single user
const deleteSingleUserFromDb = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error("User does not Exist");
  }
  const result = await User.deleteOne({ userId });
  return result;
};

//update single user
const updateSingleUserFromDb = async (userId: number, userData: any) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error("User does not Exist");
  }

  //hashing password
  if (userData.password) {
    userData.password = await bcrypt.hash(
      userData.password,
      Number(config.bcrypt_salt_rounds)
    );
  }
  const result = await User.findOneAndUpdate({ userId }, userData).select({
    _id: 0,
    password: 0,
    orders: 0,
  });
  return result;
};

//put order
const putOrderIntoDb = async (userId: number, orderData: any) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error("User does not Exist");
  }
  const result = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: orderData } },
    { new: true }
  );
  return result;
};

//get all order for single user
const getAllOrdersFromDb = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error("User does not Exist");
  }
  const result = await User.findOne({ userId }).select({ orders: 1, _id: 0 });
  return result;
};

//calculate total price of order for single user
const calculateOrdersPriceFromDb = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error("User does not Exist");
  }
  const user = await User.findOne({ userId });
  if (!user) {
    return 0;
  }
  //calculate
  let totalPrice = 0;
  user?.orders.forEach((order) => {
    totalPrice = parseFloat(
      (totalPrice + order.price * order.quantity).toFixed(2)
    );
  });

  return { totalPrice };
};

export const userServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getSingleUserFromDb,
  deleteSingleUserFromDb,
  updateSingleUserFromDb,
  putOrderIntoDb,
  getAllOrdersFromDb,
  calculateOrdersPriceFromDb,
};

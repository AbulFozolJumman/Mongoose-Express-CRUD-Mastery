import { IUser } from "./user.interface";
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

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
};

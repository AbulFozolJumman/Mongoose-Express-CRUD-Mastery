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

const getUserFromDB = async (id: string) => {
  const result = await User.findOne({ id });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getUserFromDB,
};

import { Model } from "mongoose";

export type FullName = {
  firstName: string;
  lastName: string;
};

type Hobbies = string[];

export type Address = {
  street: string;
  city: string;
  country: string;
};

export type Orders = {
  productName: string;
  price: number;
  quantity: number;
};

export type IUser = {
  userId: number;
  username: string;
  password: string;
  fullName: FullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: Hobbies;
  address: Address;
  orders?: Orders[];
};

//for creating static
export interface UserModel extends Model<IUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<IUser | null>;
}

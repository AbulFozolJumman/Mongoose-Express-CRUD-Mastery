import { Schema, model } from "mongoose";
import { Address, FullName, Order, IUser } from "./user.interface";

const fullNameSchema = new Schema<FullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const orderSchema = new Schema<Order>({
  productName: { type: String, required: true },
  price: { type: Number },
  quantity: { type: Number },
});

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number },
  email: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  hobbies: { type: [String] },
  address: { type: addressSchema, required: true },
  orders: [orderSchema],
});

export const User = model<IUser>("User", userSchema);

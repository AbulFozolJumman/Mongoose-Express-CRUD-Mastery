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

export type Order = {
  productName: string;
  price: number;
  quantity: number;
};

export type Orders = Order[];

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
  orders?: Orders;
};

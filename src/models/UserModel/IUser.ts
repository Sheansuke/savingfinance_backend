import { Date, Document } from "mongoose";
import { ObjectID } from "mongodb";
import { ICategorie } from "../CategorieModel/ICategorie";

export interface IUser {
  _id: ObjectID;
  googleId: string;
  avatar: string;
  username: string;
  email: string;
  password: string;
  isPremium: boolean;
  currency: string;
  accounts: unknown[];
  categories: ICategorie[];
  transactions: unknown[];
  createdAt: Date;
  updatedAt: Date;
}

type UserDoc = IUser & Document;
export interface IUserSchema extends UserDoc {
  encryptPassword: any;
}

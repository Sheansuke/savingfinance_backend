import { ObjectID } from "mongodb";
import { Schema, model, Model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";
import { IUserSchema } from "./IUser";
import { AccountSchema } from "../AccountModel/AccountModel";
import { CategorieSchema } from "../CategorieModel/CategorieModel";
import { TransactionSchema } from "../TransactionModel/TransactionModel";

export const UserSchema: Schema<IUserSchema> = new Schema(
  {
    googleId: String,
    avatar: String,
    username: String,
    password: String,
    email: {
      type: String,
      unique: true,
    },
    isPremium: Boolean,
    currency: String,
    accounts: [
      {
        type: AccountSchema,
      },
    ],
    categories: [
      {
        type: CategorieSchema,
      },
    ],
    transactions: [
      {
        type: TransactionSchema,
      },
    ],
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

UserSchema.methods.encryptPassword = async (password: string) => {
  const salt = await genSalt(10);
  const encryptPassword = hash(password, salt);

  return encryptPassword;
};

UserSchema.methods.matchPassword = async function (password: string) {
  return await compare(password, this.password);
};

export const UserModel: Model<IUserSchema> = model("User", UserSchema);

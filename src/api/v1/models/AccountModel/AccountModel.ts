import { Schema } from "mongoose";
import { IAccountSchema } from "./IAccount";

export const AccountSchema = new Schema({
  icon: String,
  name: String,
  currency: String,
  balance: Number,
  description: String,
  includeInTotal: Boolean,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

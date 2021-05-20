import { Schema } from "mongoose";
import { ITransactionSchema } from "./ITransaction";
import { AccountSchema } from "../AccountModel/AccountModel";
import { CategorieSchema } from "../CategorieModel/CategorieModel";

export const TransactionSchema = new Schema({
  description: String,
  type: String,
  balance: Number,
  from: {
    type: AccountSchema,
  },
  to: {
    type: CategorieSchema,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

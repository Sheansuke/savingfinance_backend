import { Schema } from "mongoose";
import { ICategorieSchema } from "./ICategorie";

export const CategorieSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    balance: Number,
  },
  { _id: false }
);

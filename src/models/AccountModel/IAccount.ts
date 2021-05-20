import { Document } from "mongoose";
import { ObjectID } from "mongodb";
import { TypeCurrencyCodes } from "../../utils/currencyCodes";

export interface IAccount {
  _id: ObjectID;
  icon: string;
  name: string;
  currency: TypeCurrencyCodes;
  balance: number;
  description: string;
  includeInTotal: boolean;
  createdAt: Date;
}
type AccountDoc = IAccount & Document;

export interface IAccountSchema extends AccountDoc { }

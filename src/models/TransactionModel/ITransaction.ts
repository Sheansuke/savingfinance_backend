import { Document } from "mongoose";
import { ObjectID } from "mongodb";
import { IAccount } from "../AccountModel/IAccount";
import { ICategorie } from "../CategorieModel/ICategorie";
import { TypeTransaction } from "../../utils/TypeTransaction";

export interface ITransaction {
  _id: ObjectID;
  description: string;
  type: TypeTransaction;
  balance: number;
  from: IAccount;
  to: ICategorie;
  createdAt: Date;
}

type TransactionDoc = ITransaction & Document;

export interface ITransactionSchema extends TransactionDoc {}

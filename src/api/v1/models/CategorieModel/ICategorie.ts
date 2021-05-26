import { Document } from "mongoose";
import { TypeCurrencyCodes } from "../../interfaces/types/currencyCodes";

export interface ICategorie {
  name: string;
  icon: string;
  currency: TypeCurrencyCodes;
  balance: number;
}

type CategorieDoc = ICategorie & Document;

export interface ICategorieSchema extends CategorieDoc { }

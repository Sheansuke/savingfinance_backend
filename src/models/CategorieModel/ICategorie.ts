import { Document } from "mongoose";
import { TypeCurrencyCodes } from "../../utils/currencyCodes";

export interface ICategorie {
  name: string;
  icon: string;
  currency: TypeCurrencyCodes;
  balance: number;
}

type CategorieDoc = ICategorie & Document;

export interface ICategorieSchema extends CategorieDoc {}

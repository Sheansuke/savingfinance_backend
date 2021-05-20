import { Request, Response } from "express";
import { UserModel } from "../../models/UserModel/UserModel";
import { IUser } from "../../models/UserModel/IUser";

// YOU WON'T BELIEVE ME, THIS RETURNS ALL USERS :0
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const Users = await UserModel.find();
    return res.json(Users);
  } catch (error) {
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { _id } = <IUser>(<unknown>req.query);
  const Users = await UserModel.findById(_id);
  return res.json(Users);
};

export const addNewCategorie = async (req: Request, res: Response) => {
  const { _id } = <IUser>(<unknown>req.query);

  const body = req.body;
  await UserModel.findByIdAndUpdate(
    _id,
    { $addToSet: { categories: body } }
  );
  const User = await UserModel.findById(_id);
  return res.json(User);
};
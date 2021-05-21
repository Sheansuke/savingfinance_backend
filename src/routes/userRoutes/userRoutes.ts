import express from "express";
import { isAuthJWT } from "../../configs/authJWT";

import {
  getAllUsers,
  getUser,
  addNewCategorie,
} from "./userController";
const router = express.Router();

const path = "/user";
router.get(`${path}/getAllUsers/`, getAllUsers);

// RECIVE A _ID
router.get(`${path}/getUser/`, isAuthJWT, getUser);

// RECIVE A _ID and A BODY: ['name of categorie']
router.post(`${path}/addNewCategorie/`, isAuthJWT, addNewCategorie);

export { router as userRoutes };

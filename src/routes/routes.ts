import { Express } from "express";
import { mainRoutes } from "./mainRoutes/mainRoutes";
import { userRoutes } from "./userRoutes/userRoutes";
import { categorieRoutes } from "./categorieRoutes/categorieRoutes";
import { googleRoutes } from "./googleRoutes/googleRoutes";

export const appRoutes = (app: Express) => {
  app.use(mainRoutes);
  app.use(userRoutes);
  app.use(categorieRoutes);
  app.use(googleRoutes);
};

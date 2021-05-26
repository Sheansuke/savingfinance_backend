import { Express } from "express";
import { mainRoutes } from "./Main";
import { userRoutes } from "./User";
import { googleRoutes } from "./Google";


export const mainRoute = "/api/v1"

export const appRoutesV1 = (app: Express) => {
  app.use(mainRoute, mainRoutes);
  app.use(mainRoute, userRoutes);
  app.use(mainRoute, googleRoutes);
};

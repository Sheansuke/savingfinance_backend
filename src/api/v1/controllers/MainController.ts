import { Request, Response } from "express";
import { createToken } from "../../../configs/authJWT";

// THIS IS MAIN PAGE WHEN USER IS LOGGED
export const mainPage = async (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  res.status(401).json({
    serverInfo: { code: 401, authorized: false, message: "Unauthorized" },
  });
};

// IF USER IS LOGGED THIS ENDPOINT RETURN A ACCESTOKEN
export const getToken = async (req: Request, res: Response) => {
  if (req.user) {
    return createToken(req, res);
  } else {
    return res.status(401).json({
      serverInfo: { code: 401, authorized: false, message: "Unauthorized" },
    });
  }
};

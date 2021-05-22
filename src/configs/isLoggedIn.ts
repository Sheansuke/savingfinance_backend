import { Request, Response } from "express";

// CHECK IF USER IS LOGGED, IF IS LOGGED ALLOW ACCESS TO USER
export const isLoggedIn = (req: Request, res: Response, next: () => void) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({
      serverInfo: { code: 401, authorized: false, message: "Unauthorized", data: "No access" },
    });
  }
};

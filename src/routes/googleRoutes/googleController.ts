import { Request, Response } from "express";
import passport from "passport";

// AUTH INITIALIZED
export const googleAuth = () => { }

// AUTH SECOND STEP
export const googleCallback = (req: Request, res: Response) => {
  passport.authenticate("google", { failureRedirect: "/failed" })
  // Successful authentication, redirect home.
  res.redirect(`${process.env.CORS_ORIGIN}`);
}

// LOGOUT XD
export const googleLogout = (req: Request, res: Response) => {
  req.logout();
  res.redirect(`${process.env.CORS_ORIGIN}`);
}

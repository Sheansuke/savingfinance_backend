import { Request, Response } from "express";

// AUTH INITIALIZED
export const googleAuth = () => { }

// AUTH SECOND STEP
export const googleCallback = (req: Request, res: Response) => {
  // Successful authentication, redirect home.
  // res.redirect(`${process.env.CORS_ORIGIN}`);
  res.redirect("https://5f68c330274e7021715ecda9--sheansuke-random-quotes.netlify.app/");
}

// LOGOUT XD
export const googleLogout = (req: Request, res: Response) => {
  req.logout();
  res.redirect(`/dashboard`);
}

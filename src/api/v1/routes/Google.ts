import express from "express";
import passport from "passport";
import { googleCallback, googleLogout } from "../controllers/GoogleController";

const router = express.Router();

// MAIN PATH
const path = "/auth/google";

router.get(`${path}`, passport.authenticate("google", {
    scope: ["profile"],
}));

router.get(`${path}/callback/`, passport.authenticate("google", { failureRedirect: "/failed" }), googleCallback);

router.get(`${path}/logout/`, googleLogout);

export { router as googleRoutes };

import express from "express";
import { googleAuth, googleCallback, googleLogout } from "./googleController";

const router = express.Router();

// MAIN PATH
const path = "/auth/google";

router.get(`${path}`, googleAuth);

router.get(`${path}/callback/`, googleCallback);

router.get(`${path}/logout/`, googleLogout);

export { router as googleRoutes };

import express from "express";
import { isLoggedIn } from "../../../configs/isLoggedIn";
import { mainPage, getToken } from "../controllers/MainController";
import { isAuthJWT } from "../../../configs/authJWT";

const router = express.Router();

// MAIN PATH
const path = "/api/v1";

router.get(`${path}`, isAuthJWT, mainPage);
router.get(`${path}getToken`, isLoggedIn, getToken);

router.get("/dashboard/", isLoggedIn);
router.get("/dashboard/accounts/", isLoggedIn);
router.get("/dashboard/categories/", isLoggedIn);
router.get("/dashboard/transactions/", isLoggedIn);
router.get("/dashboard/overview/", isLoggedIn);

export { router as mainRoutes };

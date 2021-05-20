import express from "express";
// import {} from "./categorieController";
const router = express.Router();

router.get("/categories");
router.post("/categories");
router.put("/categorie");

export { router as categorieRoutes };

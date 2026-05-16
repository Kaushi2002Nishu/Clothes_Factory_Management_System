import express from "express";
const router = express.Router();

import {
  createProduction,
  getProductions,
  updateProduction,
  deleteProduction
} from "../controllers/productionController.js";

router.post("/", createProduction);
router.get("/", getProductions);
router.put("/:id", updateProduction);
router.delete("/:id", deleteProduction);

export default router;
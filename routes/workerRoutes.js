import express from "express";
const router = express.Router();

import {
  createWorker,
  getWorkers,
  deleteWorker,
  updateWorker
} from "../controllers/WorkerController.js";

router.post("/", createWorker);
router.get("/", getWorkers);
router.delete("/:id", deleteWorker);
router.put("/:id", updateWorker);

export default router;
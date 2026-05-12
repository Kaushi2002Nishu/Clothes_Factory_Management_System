const express = require("express");
const router = express.Router();

const { createWorker, getWorkers, deleteWorker} = require("../controllers/WorkerController");

router.post("/", createWorker);
router.get("/", getWorkers);
router.delete("/:id", deleteWorker);
router.put("/:id", updateWorker);

module.exports = router;
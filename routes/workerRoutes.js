const express = require("express");
const router = express.Router();

const { createWorker, getWorkers, deleteWorker} = require("../controllers/WorkerController");

router.post("/", createWorker);
router.get("/", getWorkers);
router.delete("/:id", deleteWorker);

module.exports = router;
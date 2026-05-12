const express = require("express");
const router = express.Router();

const {
  createProduction,
  getProductions,
  updateProduction,
  deleteProduction
} = require("../controllers/productionController");

router.post("/", createProduction);
router.get("/", getProductions);
router.put("/:id", updateProduction);
router.delete("/:id", deleteProduction);

module.exports = router;
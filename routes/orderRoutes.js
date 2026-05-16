import express from "express";
const router = express.Router();

import {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
} from "../controllers/orderController.js";

router.post("/", createOrder);
router.get("/", getOrders);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
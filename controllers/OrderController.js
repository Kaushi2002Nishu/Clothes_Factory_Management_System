import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

export const updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
};

export const deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
};
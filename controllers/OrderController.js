import Order from "../models/Order.js";

// Create Order
export const createOrder = async (req, res) => {
  try {
    const { customerName, product, quantity, status } = req.body;

    if (!customerName || !product || !quantity) {
      return res.status(400).json({
        message: "customerName, product and quantity are required"
      });
    }

    const order = await Order.create({
      customerName,
      product,
      quantity,
      status
    });

    res.status(201).json(order);
  } catch (error) {
    console.error("Create Order Error:", error.message);
    res.status(500).json({
      message: error.message || "Failed to create order"
    });
  }
};

// Get All Orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Get Orders Error:", error.message);
    res.status(500).json({
      message: "Failed to fetch orders"
    });
  }
};

// Update Order
export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Update Order Error:", error.message);
    res.status(500).json({
      message: "Failed to update order"
    });
  }
};

// Delete Order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    res.status(200).json({
      message: "Order deleted successfully"
    });
  } catch (error) {
    console.error("Delete Order Error:", error.message);
    res.status(500).json({
      message: "Failed to delete order"
    });
  }
};
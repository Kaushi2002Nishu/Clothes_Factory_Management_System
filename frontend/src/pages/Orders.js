import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  const [customerName, setCustomerName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("pending");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load orders
  const loadOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");
      setOrders(res.data);
    } catch (error) {
      setError("Failed to load orders");
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  // Add order
  const addOrder = async () => {
    setError("");
    setSuccess("");

    // frontend validation
    if (!customerName || !product || !quantity) {
      setError("Customer, Product and Quantity are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/orders", {
        customerName,
        product,
        quantity,
        status
      });

      setSuccess("Order added successfully");

      setCustomerName("");
      setProduct("");
      setQuantity("");
      setStatus("pending");

      loadOrders();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add order");
    }
  };

  // Delete order
  const deleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      setSuccess("Order deleted");
      loadOrders();
    } catch (error) {
      setError(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div>
      <h2>Orders</h2>

      {/* ERROR / SUCCESS */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      {/* Customer Name */}
      <input
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      {/* PRODUCT DROPDOWN */}
      <div className="select-wrapper">
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="custom-select"
        >
          <option value="">Select Product</option>
          <option value="shirt">👕 Shirt</option>
          <option value="frocks">👗 Frocks</option>
          <option value="trouser">👖 Trouser</option>
          <option value="blouse">👚 Blouse</option>
          <option value="shorts">🩳 Shorts</option>
          <option value="denim_shirt">👔 Denim Shirt</option>
        </select>
      </div>

      {/* Quantity */}
      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      {/* Status */}
      <input
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <button onClick={addOrder}>Add Order</button>

      {/* LIST */}
      {orders.map((order) => (
        <div className="card" key={order._id}>
          <p><b>Customer:</b> {order.customerName}</p>
          <p><b>Product:</b> {order.product}</p>
          <p><b>Quantity:</b> {order.quantity}</p>
          <p><b>Status:</b> {order.status}</p>

          <button
            className="delete"
            onClick={() => deleteOrder(order._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Orders;
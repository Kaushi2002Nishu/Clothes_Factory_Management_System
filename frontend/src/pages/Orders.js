import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("pending");

  const loadOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      loadOrders();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const addOrder = async () => {
    try {
      await axios.post("http://localhost:5000/api/orders", {
        customerName,
        product,
        quantity,
        status
      });

      setCustomerName("");
      setProduct("");
      setQuantity("");
      setStatus("pending");

      loadOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Orders</h2>

      <input
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

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

      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <button onClick={addOrder}>Add Order</button>

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
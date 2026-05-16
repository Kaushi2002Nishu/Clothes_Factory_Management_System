import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [productType, setProductType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");

  const loadOrders = async () => {
    const res = await axios.get("http://localhost:5000/api/orders");
    setOrders(res.data);
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:5000/api/orders/${id}`);
    loadOrders();
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const addOrder = async () => {
    await axios.post("http://localhost:5000/api/orders", {
      customerName,
      productType,
      quantity,
      status
    });

    setCustomerName("");
    setProductType("");
    setQuantity("");
    setStatus("");
    loadOrders();
  };

  return (
    <div>
      <h2>Orders</h2>

      <input placeholder="Customer Name" value={customerName} onChange={(e)=>setCustomerName(e.target.value)} />
      <input placeholder="Product" value={productType} onChange={(e)=>setProductType(e.target.value)} />
      <input placeholder="Quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
      <input placeholder="Status" value={status} onChange={(e)=>setStatus(e.target.value)} />

      <button onClick={addOrder}>Add Order</button>

      {orders.map((order) => (
        <div className="card" key={order._id}>
          <p><b>Customer:</b> {order.customerName}</p>
          <p><b>Product:</b> {order.productType}</p>
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
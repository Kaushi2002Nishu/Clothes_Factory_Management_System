import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [customer, setCustomer] = useState("");

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/orders");
    setOrders(res.data);
  };

  useEffect(() => { load(); }, []);

  const add = async () => {
    await axios.post("http://localhost:5000/api/orders", {
      customerName: customer
    });
    setCustomer("");
    load();
  };

  return (
    <div>
      <h2>Orders</h2>

      <input placeholder="Customer Name" value={customer} onChange={(e) => setCustomer(e.target.value)} />
      <button onClick={add}>Add Order</button>

      {orders.map((o) => (
        <div className="card" key={o._id}>
          {o.customerName}
        </div>
      ))}
    </div>
  );
}

export default Orders;
import { useEffect, useState } from "react";
import axios from "axios";

function Production() {
  const [items, setItems] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [workerId, setWorkerId] = useState("");
  const [stage, setStage] = useState("");
  const [date, setDate] = useState("");

  const loadProduction = async () => {
    const res = await axios.get("http://localhost:5000/api/productions");
    setItems(res.data);
  };

  useEffect(() => {
    loadProduction();
  }, []);

  const addProduction = async () => {
    await axios.post("http://localhost:5000/api/productions", {
      orderId,
      workerId,
      stage,
      date
    });

    setOrderId("");
    setWorkerId("");
    setStage("");
    setDate("");
    loadProduction();
  };

   const deleteProduction = async (id) => {
      await axios.delete(`http://localhost:5000/api/productions/${id}`);
      loadProduction();
    };

  return (
    <div>
      <h2>Production</h2>

      <input placeholder="Order ID" value={orderId} onChange={(e)=>setOrderId(e.target.value)} />
      <input placeholder="Worker ID" value={workerId} onChange={(e)=>setWorkerId(e.target.value)} />
      <input placeholder="Stage" value={stage} onChange={(e)=>setStage(e.target.value)} />
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />

      <button onClick={addProduction}>Add Production</button>

      {items.map((item) => (
        <div className="card" key={item._id}>
          <p><b>Order ID:</b> {item.orderId}</p>
          <p><b>Worker ID:</b> {item.workerId}</p>
          <p><b>Stage:</b> {item.stage}</p>
          <p><b>Date:</b> {item.date?.substring(0,10)}</p>

          <button
            className="delete"
            onClick={() => deleteProduction(item._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Production;
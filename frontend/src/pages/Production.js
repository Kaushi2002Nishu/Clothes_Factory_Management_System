import { useEffect, useState } from "react";
import axios from "axios";

function Production() {
  const [items, setItems] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [workerId, setWorkerId] = useState("");
  const [date, setDate] = useState("");
  const [stage, setStage] = useState("designing");

  // Load productions
  const loadProduction = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/productions");
      setItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProduction();
  }, []);

  // Add production
  const addProduction = async () => {
    try {
      await axios.post("http://localhost:5000/api/productions", {
        orderId,
        workerId,
        date,
        stage
      });

      setOrderId("");
      setWorkerId("");
      setDate("");
      setStage("designing");

      loadProduction();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete production
  const deleteProduction = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/productions/${id}`);
      loadProduction();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Production</h2>

      {/* Order ID */}
      <input
        placeholder="Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />

      {/* Worker ID */}
      <input
        placeholder="Worker ID"
        value={workerId}
        onChange={(e) => setWorkerId(e.target.value)}
      />

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Stage Dropdown (moved after date) */}
      <div className="select-wrapper">
        <select
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          className="custom-select"
        >
          <option value="designing">📝 Designing</option>
          <option value="fabric_cutting">✂️ Fabric Cutting</option>
          <option value="cutting">✂️ Cutting</option>
          <option value="stitching">🧵 Stitching</option>
          <option value="quality_check">✅ Quality Check</option>
          <option value="ironing">🔥 Ironing</option>
          <option value="labeling">🏷️ Labeling</option>
          <option value="packing">📦 Packing</option>
          <option value="shipping">🚚 Shipping</option>
          <option value="completed">✔️ Completed</option>
        </select>
        <span className="select-icon">▼</span>
      </div>

      <button onClick={addProduction}>Add Production</button>

      {/* LIST */}
      {items.map((item) => (
        <div className="card" key={item._id}>
          <p><b>Order ID:</b> {item.orderId}</p>
          <p><b>Worker ID:</b> {item.workerId}</p>
          <p><b>Stage:</b> {item.stage}</p>
          <p><b>Date:</b> {item.date?.substring(0, 10)}</p>

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
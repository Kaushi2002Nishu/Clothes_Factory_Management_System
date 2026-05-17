import { useEffect, useState } from "react";
import axios from "axios";

function Workers() {
  const [workers, setWorkers] = useState([]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("tailor");
  const [salary, setSalary] = useState("");
  const [shift, setShift] = useState("morning");

  // Load workers
  const loadWorkers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/workers");
      setWorkers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadWorkers();
  }, []);

  // Add worker
  const addWorker = async () => {
    try {
      await axios.post("http://localhost:5000/api/workers", {
        name,
        position,
        salary,
        shift
      });

      setName("");
      setPosition("tailor");
      setSalary("");
      setShift("morning");

      loadWorkers();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete worker
  const deleteWorker = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/workers/${id}`);
      loadWorkers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Workers</h2>

      {/* Name */}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* POSITION DROPDOWN */}
      <div className="select-wrapper">
        <select
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="custom-select"
        >
          <option value="tailor">🧵 Tailor</option>
          <option value="designer">🎨 Designer</option>
          <option value="cutting_master">✂️ Cutting Master</option>
          <option value="quality_checker">✅ Quality Checker</option>
          <option value="iron_operator">🔥 Iron Operator</option>
          <option value="packer">📦 Packer</option>
        </select>
        <span className="select-icon">▼</span>
      </div>

      {/* Salary */}
      <input
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      {/* SHIFT DROPDOWN */}
      <div className="select-wrapper">
        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          className="custom-select"
        >
          <option value="morning">🌅 Morning</option>
          <option value="evening">🌇 Evening</option>
          <option value="night">🌙 Night</option>
        </select>
        <span className="select-icon">▼</span>
      </div>

      <button onClick={addWorker}>Add Worker</button>

      {/* LIST */}
      {workers.map((worker) => (
        <div className="card" key={worker._id}>
          <p><b>Name:</b> {worker.name}</p>
          <p><b>Position:</b> {worker.position}</p>
          <p><b>Salary:</b> {worker.salary}</p>
          <p><b>Shift:</b> {worker.shift}</p>

          <button
            className="delete"
            onClick={() => deleteWorker(worker._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Workers;
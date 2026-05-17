import { useEffect, useState } from "react";
import axios from "axios";

function Workers() {
  const [workers, setWorkers] = useState([]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("tailor");
  const [salary, setSalary] = useState("");
  const [shift, setShift] = useState("morning");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load workers
  const loadWorkers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/workers");
      setWorkers(res.data);
    } catch (error) {
      setError("Failed to load workers");
    }
  };

  useEffect(() => {
    loadWorkers();
  }, []);

  // Add worker
  const addWorker = async () => {
    setError("");
    setSuccess("");

    // frontend validation
    if (!name || !salary) {
      setError("Name and Salary are required");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/workers", {
        name,
        position,
        salary,
        shift
      });

      setSuccess("Worker added successfully");

      setName("");
      setPosition("tailor");
      setSalary("");
      setShift("morning");

      loadWorkers();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add worker");
    }
  };

  // Delete worker
  const deleteWorker = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/workers/${id}`);
      setSuccess("Worker deleted");
      loadWorkers();
    } catch (error) {
      setError(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div>
      <h2>Workers</h2>

      {/* ERROR / SUCCESS MESSAGES */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

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
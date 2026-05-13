import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [shift, setShift] = useState("");
  const [workers, setWorkers] = useState([]);

  // Get workers
  const fetchWorkers = async () => {
    const res = await axios.get("http://localhost:5000/api/workers");
    setWorkers(res.data);
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  // Add worker
  const addWorker = async () => {
    await axios.post("http://localhost:5000/api/workers", {
      name,
      position,
      salary,
      shift
    });

    setName("");
    setPosition("");
    setSalary("");
    setShift("");
    fetchWorkers();
  };

  // Delete worker
  const deleteWorker = async (id) => {
    await axios.delete(`http://localhost:5000/api/workers/${id}`);
    fetchWorkers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Clothes Factory Management</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <input
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <input
        placeholder="Shift"
        value={shift}
        onChange={(e) => setShift(e.target.value)}
      />

      <button onClick={addWorker}>Add Worker</button>

      <hr />

      <h2>Workers</h2>

      {workers.map((worker) => (
        <div key={worker._id}>
          {worker.name} - {worker.position} - {worker.salary}
          <button onClick={() => deleteWorker(worker._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
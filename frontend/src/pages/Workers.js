import { useEffect, useState } from "react";
import axios from "axios";

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [shift, setShift] = useState("");

  const loadWorkers = async () => {
    const res = await axios.get("http://localhost:5000/api/workers");
    setWorkers(res.data);
  };

  useEffect(() => {
    loadWorkers();
  }, []);

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
    loadWorkers();
  };

  const deleteWorker = async (id) => {
    await axios.delete(`http://localhost:5000/api/workers/${id}`);
    loadWorkers();
  };

  return (
    <div>
      <h2>Workers</h2>

      <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input placeholder="Position" value={position} onChange={(e)=>setPosition(e.target.value)} />
      <input placeholder="Salary" value={salary} onChange={(e)=>setSalary(e.target.value)} />
      <input placeholder="Shift" value={shift} onChange={(e)=>setShift(e.target.value)} />

      <button onClick={addWorker}>Add Worker</button>

      {workers.map((worker) => (
        <div className="card" key={worker._id}>
          <p><b>Name:</b> {worker.name}</p>
          <p><b>Position:</b> {worker.position}</p>
          <p><b>Salary:</b> {worker.salary}</p>
          <p><b>Shift:</b> {worker.shift}</p>

          <button className="delete" onClick={() => deleteWorker(worker._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Workers;
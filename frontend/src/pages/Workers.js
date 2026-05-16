import { useEffect, useState } from "react";
import axios from "axios";

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/workers");
    setWorkers(res.data);
  };

  useEffect(() => { load(); }, []);

  const add = async () => {
    await axios.post("http://localhost:5000/api/workers", { name, position });
    setName(""); setPosition("");
    load();
  };

  const del = async (id) => {
    await axios.delete(`http://localhost:5000/api/workers/${id}`);
    load();
  };

  return (
    <div>
      <h2>Workers</h2>

      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
      <button onClick={add}>Add Worker</button>

      {workers.map((w) => (
        <div className="card" key={w._id}>
          <div>{w.name} - {w.position}</div>
          <button className="delete" onClick={() => del(w._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Workers;
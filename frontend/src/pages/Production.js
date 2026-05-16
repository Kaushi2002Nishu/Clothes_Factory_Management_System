import { useEffect, useState } from "react";
import axios from "axios";

function Production() {
  const [items, setItems] = useState([]);
  const [stage, setStage] = useState("");

  const load = async () => {
    const res = await axios.get("http://localhost:5000/api/productions");
    setItems(res.data);
  };

  useEffect(() => { load(); }, []);

  const add = async () => {
    await axios.post("http://localhost:5000/api/productions", { stage });
    setStage("");
    load();
  };

  return (
    <div>
      <h2>Production</h2>

      <input placeholder="Stage" value={stage} onChange={(e) => setStage(e.target.value)} />
      <button onClick={add}>Add Stage</button>

      {items.map((i) => (
        <div className="card" key={i._id}>
          {i.stage}
        </div>
      ))}
    </div>
  );
}

export default Production;
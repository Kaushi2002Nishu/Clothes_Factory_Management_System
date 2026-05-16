import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Workers from "./pages/Workers";
import Orders from "./pages/Orders";
import Production from "./pages/Production";

function App() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <h2>Factory System</h2>

        <Link to="/">Dashboard</Link>
        <Link to="/workers">Workers</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/production">Production</Link>
      </div>

      <div className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/production" element={<Production />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
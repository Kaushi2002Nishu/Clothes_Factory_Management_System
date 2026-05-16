function Dashboard() {
  return (
    <div>
      <h1>Factory Dashboard</h1>

      <div className="grid">
        <div className="box">
          <h1>Workers</h1>
          <p>Manage factory workers</p>
        </div>

        <div className="box">
          <h1>Orders</h1>
          <p>Track customer orders</p>
        </div>

        <div className="box">
          <h1>Production</h1>
          <p>Monitor production stages</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
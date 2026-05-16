function Dashboard() {
  return (
    <div>
      <div className="dashboard-header">
        <div className="dashboard-text">
          <h1>Clothes Factory Management System</h1>
          <p>
            Manage workers, customer orders, and production stages easily.
          </p>
        </div>

        <div className="dashboard-image">
          <img
            src="/factory.jpg"
            alt="Factory"
          />
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-box">
          <h2>👷 Workers</h2>
          <p>Manage employee details, salary, and shifts.</p>
        </div>

        <div className="dashboard-box">
          <h2>📦 Orders</h2>
          <p>Track customer product orders and status.</p>
        </div>

        <div className="dashboard-box">
          <h2>🏭 Production</h2>
          <p>Monitor factory production progress.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
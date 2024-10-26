import React from "react";
import "./AdminPanel.css";
import Panel from './Panel';

const Dashboard = () => {
  return (
    <div className="admin-container">
      <Panel />
      <div className="admin-main">
        <div className='px-0'>
          <div className="py-12 bg-gray-100">
            <h2 className="text-center text-4xl text-blue-900 font-bold">Dashboard</h2>
          </div>
          <div className="stats-container px-12"> 
            <div className="stat-box">
              <h3>Total Institutes</h3>
              <p>100</p>
            </div>
            <div className="stat-box">
              <h3>Verified Requests</h3>
              <p>50</p>
            </div>
            <div className="stat-box">
              <h3>Pending Verifications</h3>
              <p>20</p>
            </div>
            <div className="stat-box">
              <h3>Reports</h3>
            <p>10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./AdminPanel.css";
import Panel from "./Panel";

const ReportReviews = () => {
  return (
    <div className="admin-container">
      <Panel />

      <div className="admin-main">
    <div className="report-container">
      <h2>Report Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Institute Name</th>
            <th>Review ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phillips Exeter Academy</td>
            <td>12345</td>
            <td>
              <button className="btn-view">View Report</button>
              <button className="btn-resolve">Resolve</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default ReportReviews;

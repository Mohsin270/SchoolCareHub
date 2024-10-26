import React from "react";
import "./AdminPanel.css";
import Panel from "./Panel";

const VerifyRequests = () => {
  return (
    <div className="admin-container">
      <Panel />

      <div className="admin-main">
    <div className="verify-container">
      <h2>Verify Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Institute Name</th>
            <th>Request Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phillips Exeter Academy</td>
            <td>Verification</td>
            <td>
              <button className="btn-approve">Approve</button>
              <button className="btn-reject">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default VerifyRequests;

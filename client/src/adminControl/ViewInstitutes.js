import React from "react";
import "./AdminPanel.css";
import Panel from "./Panel";

const ViewInstitutes = () => {
  return (
    <div className="admin-container">
      <Panel />

      <div className="admin-main">
    <div className="view-container">
      <h2>View Institutes</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phillips Exeter Academy</td>
            <td>(603) 772-3437</td>
            <td>Exeter, NH</td>
            <td>Private</td>
            <td>
              <button className="btn-edit">Edit</button>
              <button className="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default ViewInstitutes;

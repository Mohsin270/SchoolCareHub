import React from "react";
import "./AdminPanel.css";
import Panel from "./Panel";

const AddInstitute = () => {
  return (
    <div className="admin-container">
      <Panel />
      <div className="admin-main">

     <div className="adding-container">
      <h2>Add Institute</h2>
      <form className="admin-form">
        <label>Institute Name</label>
        <input type="text" placeholder="Enter institute name" required />
        <label>Contact Details</label>
        <input type="text" placeholder="Enter contact details" required />
        <label>Location</label>
        <input type="text" placeholder="Enter location" required />
        <label>Type</label>
        <input type="text" placeholder="Enter type (e.g., Private, Public)" required />
        <button type="submit">Add Institute</button>
      </form>
     </div>
    </div>
    </div>
  );
};

export default AddInstitute;

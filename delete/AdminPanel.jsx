import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = () => {
  const navigate = useNavigate();

  // State for form data and table data
  const [institutes, setInstitutes] = useState([
    {
      name: "Phillips Exeter Academy",
      contact: "(603) 772-3437",
      location: "Exeter, NH",
      type: "Private",
    },
    // Add more initial data as needed
  ]);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    type: "",
  });

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddInstitute = (e) => {
    e.preventDefault();
    // Add new institute to the list
    setInstitutes((prevInstitutes) => [...prevInstitutes, formData]);
    // Clear the form
    setFormData({
      name: "",
      contact: "",
      location: "",
      type: "",
    });
    console.log("Institute added!");
  };

  // Handle actions like edit, delete, approve, reject
  const handleEdit = (index) => {
    // Edit logic
  };
  const handleDelete = (index) => {
    // Delete logic
  };
  const handleApprove = (index) => {
    // Approve logic
  };
  const handleReject = (index) => {
    // Reject logic
  };

  return (
    <div className="admin-container">
      <nav className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li onClick={() => navigate("/admin/add-institute")}>Add Institute</li>
          <li onClick={() => navigate("/admin/view-institutes")}>View Institutes</li>
          <li onClick={() => navigate("/admin/verify-requests")}>Verify Requests</li>
          <li onClick={() => navigate("/admin/report-reviews")}>Report Reviews</li>
        </ul>
      </nav>
      <main className="admin-main">
        <section id="add-institute">
          <h2>Add Institute</h2>
          <form className="admin-form" onSubmit={handleAddInstitute}>
            <label>Institute Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter institute name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label>Contact Details</label>
            <input
              type="text"
              name="contact"
              placeholder="Enter contact details"
              value={formData.contact}
              onChange={handleInputChange}
              required
            />
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
            <label>Type</label>
            <input
              type="text"
              name="type"
              placeholder="Enter type (e.g., Private, Public)"
              value={formData.type}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Institute</button>
          </form>
        </section>
        <section id="view-institutes">
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
              {institutes.map((institute, index) => (
                <tr key={index}>
                  <td>{institute.name}</td>
                  <td>{institute.contact}</td>
                  <td>{institute.location}</td>
                  <td>{institute.type}</td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section id="verify-requests">
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
              {/* Example Data */}
              <tr>
                <td>Phillips Exeter Academy</td>
                <td>Verification</td>
                <td>
                  <button className="btn-approve" onClick={() => handleApprove(0)}>Approve</button>
                  <button className="btn-reject" onClick={() => handleReject(0)}>Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="report-reviews">
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
              {/* Example Data */}
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
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;

import React, { useState } from "react";
import axios from 'axios';
import "./CSS/AddUser.css"; // Import your external CSS file

export default function AddUser() {
  const [data, setData] = useState({
    name: "",
    desc: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdd = async (e) => {
    try {
      await axios.post("http://localhost:8080/add", { data });
      console.log("Data added successfully");
      setData({ name: "", desc: "" });
    } catch (err) {
      console.error("Error adding data:", err);
    }
  };

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Add User</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Enter User Name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    name="desc"
                    value={data.desc}
                    onChange={handleChange}
                    placeholder="Enter Description"
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleAdd}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

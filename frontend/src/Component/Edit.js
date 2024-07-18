import axios from 'axios';
import React, { useContext, useState } from 'react';
import UserContext from './context/UserContext';
import { useNavigate } from 'react-router-dom';


export default function Edit() {
  const [data, setData] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/${user._id}`, { data })
        .then(res => {
          console.log("UPDATE SUCCESSFULLY");
          setUser({ name: '', desc: '' });
          navigate('/');
        })
        .catch(err => console.log(err));

    } catch (error) {
      console.error('Error updating user:', error);
    }

  };

  return (
    <div className="container">
      <div className="p-5">
        <div className="mb-3 border-dark">
          <label htmlFor="name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
            value={user?.name||''}
            placeholder="Enter user Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="desc"
            onChange={handleChange}
            id="desc"
            value={user?.desc ||''}
            placeholder="Enter Description"
          />

          <div className="py-4">
            <button type="button" onClick={handleAdd} className="btn btn-success">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

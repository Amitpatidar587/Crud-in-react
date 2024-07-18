import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import UserContext from './context/UserContext';
import './CSS/UserList.css'; // Import your external CSS file

export default function UserList() {
  const [allData, setAllData] = useState([]);
  const [del, setDel] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    console.log(e.target.id);
    let id = e.target.id;
    await axios
      .delete(`http://localhost:8080/api/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setDel(true);
  };

  const handleEdit = (data) => {
    setUser(data);
    navigate('/edit');
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/data')
      .then((res) => {
        setAllData(res.data);
      })
      .catch((err) => console.log('error in axios in userList=>', err));
    setDel(false);
  }, [del]);

  return (
    <div className='container pt-3'>
      <table>
        <thead>
          <tr>
            <th>_Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((data, idx) => (
            <tr key={data._id}>
              <td>{data._id}</td>
              <td>{data.name}</td>
              <td>{data.desc}</td>
              <td>
                <button className='btn' onClick={() => handleEdit(data)}>
                  Edit
                </button>
                <button id={data._id} onClick={handleDelete} className='btn'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

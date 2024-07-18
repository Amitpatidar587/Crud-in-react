import React from 'react';
import './CSS/Navbar.css'; // Import your external CSS file

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom fixed-top bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">CRUD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/" aria-current="page">UserList</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AddUser">AddUser</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

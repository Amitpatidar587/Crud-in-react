import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import UserList from './Component/UserList';
import AddUser from './Component/AddUser';
import ContextProvider from './Component/context/ContextProvider';
import Edit from './Component/Edit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ContextProvider>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </Router>
    </ContextProvider>
  </>
);

reportWebVitals();

import logo from './logo.svg';
import './admin.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from "axios"

function Admin() {
  

  const [user, setUser] = useState({
    email: "",
    password: ""

  })
  const handleChange = e => {
    const { name, value } = e.target
    
    setUser({
      ...user,
      [name]: value
    })
  }
  const login = () => {
    axios.post("http://localhost:9002/admin", user)
      .then(res => {
        alert(res.data.message)
        
      })
  }

  return (
    <>
      <br />
      <br />
      <form>

        <h1>Login</h1>
       
        <p>please enter your login and password</p>
        <div className="col-md-4">
          <label for="validationDefault01" className="form-label">Username</label>
          <input type="email" className="form-control" id="validationDefault01" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="col-md-4">
          <label for="validationDefault02" className="form-label">Password</label>
          <input type="password" className="form-control" id="validationDefault02" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <br />
        <div className="col-md-20">
          <button className="btn btn-primary" type="button" onClick={login}>Login</button>
        </div>
        <div>or</div>
      <div className="col-18">
        <Link className="btn btn-primary" type="button" to="/student">Register</Link>
      </div>

      </form>
    </>

  );
}

export default Admin;

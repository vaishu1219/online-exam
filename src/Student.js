
import './App.css';
import React, { useState } from "react";
import axios from "axios"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Student() {
  
  const [user, setUser] = useState({
    name: "",
    last_name: "",
    email: "",
    University: "",
    Branch: "",
    Roll: "",
    password: "",
    reEnterPassword: ""

  })
  const handleChange = e => {
    const { name, value } = e.target
    
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {

    const { name, last_name, email, University, Branch, Roll, password, reEnterPassword } = user

    if (name && last_name && email && University && Branch && Roll && (password === reEnterPassword)) {
     
      axios.post("http://localhost:9002/student", user)
        .then(res => {
          alert(res.data.message)
         
       
        })
    
  }else {
    alert("invalid input")
}
    

  }

return (
  <>

    <form>

      <h1>Student Register</h1>
      {console.log("User", user)}
      <div className="col-md-5">
        <label for="validationDefault01" className="form-lablast_nameel">First name</label>
        <input type="text" className="form-control" id="validationDefault01" name="name" value={user.name} onChange={handleChange} autoComplete="off" required />
      </div>


      <div className="col-md-5">
        <label for="validationDefault02" className="form-label">Last name</label>
        <input type="text" className="form-control" id="validationDefault02" name="last_name" value={user.last_name} onChange={handleChange} autoComplete="off" required />
      </div>


      <div className="col-md-5">
        <label for="validationDefaultUsername" className="form-label">Username</label>
        <div className="input-group">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name="email" value={user.email} onChange={handleChange} autoComplete="off" required />
        </div>
      </div>


      <div className="col-md-5">
        <label for="validationDefault03" className="form-label">University</label>
        <input type="text" className="form-control" id="validationDefault03" name="University" value={user.University} onChange={handleChange} autoComplete="off" required />
      </div>


      <div className="col-md-5">
        <label for="validationDefault04" className="form-label">Branch</label>
        <select className="form-select" id="validationDefault04" name="Branch" value={user.Branch} onChange={handleChange} autoComplete="off" required>
          <option selected disabled value="">Choose Your Branch</option>
          <option>Computer Science & Engineering</option>
          <option>Mechanical Engineering</option>
          <option>Electronics and Communication Engineering</option>
          <option>Electrical Engineering</option>
          <option>Information Technology</option>
          <option>Automobile Engineering</option>
          <option>Chemical Engineering</option>
        </select>
      </div>


      <div className="col-md-5">
        <label for="validationDefault05" className="form-label">Roll Number</label>
        <input type="text" className="form-control" id="validationDefault05" name="Roll" value={user.Roll} onChange={handleChange} autoComplete="off" required />
      </div>

      <div className="col-md-5">
        <label for="validationDefault05" className="form-label">Password</label>
        <input type="password" className="form-control" id="validationDefault05" name="password" value={user.password} onChange={handleChange} autoComplete="off" required />
      </div>

      <div className="col-md-5">
        <label for="validationDefault05" className="form-label">reEnterPassword</label>
        <input type="password" className="form-control" id="validationDefault05" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} autoComplete="off" required />
      </div>


      


      <div className="col-18">
        <button className="btn btn-primary" type="button" onClick={register}>Register</button>
      </div>
      <div>or</div>
      <div className="col-18">
        <Link className="btn btn-primary" type="button" to="/admin">Login</Link>
      </div>

    </form>



  </>

);
}

export default Student;

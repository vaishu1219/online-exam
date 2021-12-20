import logo from './logo.svg';
import './App.css';
import React from "react";
import {Link} from "react-router-dom"


function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Online-Exam</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Admin">Admin</Link>
        </li>
      

        <li className="nav-item">
          <Link className="nav-link" to="/Student">Student</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Student">Teacher</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<h1>Online Examination Portal</h1>
    </>

  );
}

export default Home;

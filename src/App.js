import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import Student from './Student';
import Error from './Error';


function App() {
  return (
    <>
    <Switch>
      <Route exact path ="/" component={Home} />
      <Route path ="/Admin" component={Admin} />
      <Route path ="/Student" component={Student} />
      <Route component={Error} />
      
    </Switch>

   

    </>

  );
}

export default App;

import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navigation/navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Router>
            <Navbar />
        </Router>
        <h1>Hello from React to Django</h1>
    </div>
  );
}

export default App;

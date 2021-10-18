import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navigation/navbar";
import CategoryDetail from "./components/category/CategoryDetail";
import PostDetail from "./components/posts/PostDetail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Router>
            <Navbar />
            <Switch>
                <Route path="/post/:id" exact component={PostDetail}/>
                <Route path="/category/:id" exact component={CategoryDetail}/>
            </Switch>
        </Router>
        <h1>Hello from React to Django</h1>
    </div>
  );
}

export default App;

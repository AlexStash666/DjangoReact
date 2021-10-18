import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/category/"
        }).then(response => {
            setCategories(response.data)
        })
    }, [])

  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {categories.map(c => (
                    <li className="nav-item">
                        <Link className="nav-link" to={{pathname: `/category/${c.id}/`,
                            fromDashboard: false}}>
                            {c.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search"
                     aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

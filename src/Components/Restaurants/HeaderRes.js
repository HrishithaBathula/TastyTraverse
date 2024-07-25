import React from "react";
import {Link} from "react-router-dom";
import Header from "../Header";


const HeaderRes = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex align-items-center justify-content-end mt-3">
          <button className="navbar-toggler w-25 my-2" type='button' data-bs-toggle='collapse' data-bs-target='#nav-header' aria-controls="nav-header" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to={"/"}
            href="index.html"
            id="res-logo"
            className="navbar-brand"
            style={{textDecoration: "none"}}
          >
            <i>Tt!</i>
          </Link>
          <div id='nav-header' className="collapse navbar-collapse justify-content-end">
            <Header/>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderRes;

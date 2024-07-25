import React, { Component } from "react";
import {Link} from 'react-router-dom';
import HeaderRes from "../Restaurants/HeaderRes";
import "../../styles/home.css";
import "../../styles/cuisine.css";

const url = "https://login-api-9e52.onrender.com/auth/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test1@gmail.com",
      password: "1234",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
    })
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      if (data.auth === true) {
        sessionStorage.setItem("tk", data.token);
        const restId = sessionStorage.getItem("restId");
        if(restId) {
          this.props.history.push(`/details/${restId}`);
        } else {
          this.props.history.push('/');
        }
      } else {
        this.setState({ message: data.token });
      }
    })
  };

  render() {
    return (
      <div className="loginPage position-relative">
        <HeaderRes />
        <div className="container userlogin mt-5 mx-auto">
          <h2 style={{ color: "red" }}>{this.state.message}</h2>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input
              className="form-control"
              type="email"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mb-4">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              className="form-control"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="button"
            className="btn text-light bg-success w-25 mx-auto"
            onClick={this.handleSubmit}
          >
            Login
          </button>
          <hr />
          {/* <div className="d-flex flex-column w-50 mb-4 mx-auto">
            <button className="btn btn-outline-secondary mb-3">
              <i
                className="fa-regular fa-envelope"
                style={{ color: "#de1231" }}
              ></i>
              &nbsp; Continue with gmail
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fa-brands fa-facebook" style={{ color: "#18428c" }}></i>
              &nbsp; Continue with facebook
            </button>
          </div> */}
          <p className="text-center">Not a user? Please <Link to="/register">Signup</Link></p>
        </div>
        
        <div className="footer text-center">
          <p className="p-2 text-center">Copyrights &copy; 2024</p>
        </div>
      </div>
    );
  }
}

export default Login;

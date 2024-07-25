import React, { Component } from "react";
import HeaderRes from "../Restaurants/HeaderRes";
import {Link} from 'react-router-dom';
import "../../styles/cuisine.css";

const url = "https://login-api-9e52.onrender.com/auth/register";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit =() => {
    console.log(this.state)
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(this.props.history.push("/login"))
    
  }

  render() {
    return (
      <div className="loginPage position-relative ">
        <HeaderRes />
        <div className="container userlogin mt-5 mx-auto">    
        <div className="row">
          <div className="col-6 form-group mb-2">
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="form-control"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
          <div className="col-6 form-group mb-2">
            <label className="form-label" htmlFor="phone">
              Phone:
            </label>
            <input
              className="form-control"
              type="number"
              value={this.state.phone}
              name="phone"
              onChange={this.handleChange}
            />
          </div>
        </div>
          
          <div className="form-group mb-2">
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
          <div className="form-group mb-2">
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
          <div className="form-group mb-2">
            <label htmlFor="address">Address: </label>
            <textarea
              className="form-control"
              rows="2"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn text-light bg-success w-25 mx-auto"
            onClick={this.handleSubmit}
          >
            Register
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
              <i
                className="fa-brands fa-facebook"
                style={{ color: "#18428c" }}
              ></i>
              &nbsp; Continue with facebook
            </button>
          </div> */}
          <p className="text-center">
            Already had an account? <Link to="/login"> Login </Link>
          </p>
        </div>
        
        <div className="footer text-center">
          <p className="text-center p-2">Copyrights &copy; 2024</p>
        </div>
      </div>
    );
  }
}

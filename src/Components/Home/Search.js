import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const lurl = "https://restaurant-apis.onrender.com/locations";
const rurl = "https://restaurant-apis.onrender.com/restaurants?state_id=";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: "",
            restaurants: "",
            // mealTypes: ''
        }
    }

    renderLocation = (data) => {
      if(data) {
        return data.map((item) => {
          return (
            <option key={item._id} value={item.state_id}>
              {item.location_name}, {item.state}
            </option>
          )
        });
      }
    }

    renderRestaurants = (data) => {
      if(data) {
        return data.map((item) => (
          <option  key={item._id} value={item.restaurant_id}>
            {item.restaurant_name}
          </option>
        ))
      }
    }

    handleCity = (e) => {
      const stateId = e.target.value;
      // console.log(stateId);
      fetch(`${rurl}${stateId}`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
          this.setState({restaurants: data});
          // console.log(data);
        })
    }

    handleMealTypes = (e) => {
      // this.props.parentHandleMeals(e.target.value)
      let restId = e.target.value;
      this.props.history.push(`/details/${restId}`);
    }

  render() {
    return (
      <div className={"row position-absolute mx-auto"} id="hero-select">
        <div className={"col-12 col-md-6 mb-3"}>
          <select className="form-select p-2" onChange={this.handleCity}>
            <option>Please select location</option>
            {this.renderLocation(this.state.locations)}
          </select>
        </div>
        <div className="col-12 col-md-6">
          <div className="input-group">
            <span className="input-group-text">
              <i
                className="fa-sharp fa-solid fa-magnifying-glass"
                id="search-icon"
                style={{ color: "#9e9e9e" }}
              ></i>
            </span>
            <select className="form-select p-2" onChange={this.handleMealTypes}>
              <option>Please select restaurants</option>
              {this.renderRestaurants(this.state.restaurants)}
            </select>
          </div>
        </div>
      </div>
    );
  }

  // api calling method
  componentDidMount() {
    fetch(`${lurl}`, { method: "GET" })
        .then(response => response.json())
        .then((data) => {
            this.setState({locations: data});
        })
  }
}

export default withRouter(Search);

import React, { Component } from 'react'
import axios from 'axios';

const url = "https://restaurant-apis.onrender.com/restaurants/";

export default class FilterSort extends Component {
  filterSort = (e) => {
    const sort = e.target.value
    const mealId = sessionStorage.getItem("mealId")
    sessionStorage.setItem("sort", sort);

    let sortUrl;

    if (sort < 1) {
      sortUrl = `${url}${mealId}?sort=${sort}`;
    }
    else {
      sortUrl = `${url}${mealId}`
    }

    axios.get(sortUrl).then((res) => {
      this.props.restPerSort(res.data)
    });

  }

  render() {
    return (
      <>
        <h2 className="p-0 fw-semibold">Sort</h2>
        <div className="radio-wrapper" onChange={this.filterSort}>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="lowtohg"
              name="sort"
              value="1"
            />
            <label htmlFor="lowtohg" className="form-check-label">
              Price low to high
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="hgtolow"
              name="sort"
              value="-1"
            />
            <label htmlFor="hgtolow" className="form-check-label">
              Price high to low
            </label>
          </div>
        </div>
      </>


    )
  }
}

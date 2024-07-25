import React, { Component } from 'react'
import axios from 'axios';

const curl = "https://restaurant-apis.onrender.com/restaurants/"

export default class FilterCuisine extends Component {
  filterCuisine = (event) => {
    const mealId = this.props.mealId
    const cuisineCheck = event.target.checked;
    let cuisineId;
    if(cuisineCheck) {
      cuisineId = event.target.value
    }
    let cuisineUrl;

    if(cuisineId){
      sessionStorage.setItem("cuisineId", cuisineId)
    } else if(cuisineId == null) {
      sessionStorage.removeItem("cuisineId")
    }

    if(cuisineUrl === "") {
      cuisineUrl = `${curl}${mealId}`
    } else {
      cuisineUrl = `${curl}${mealId}?cuisineId=${cuisineId}`
    }

    axios.get(cuisineUrl).then((res) => {
      this.props.restPerCuisine(res.data)
    })
  }

  render() {
    return (
        <div className="cuisine">
        <h3>Cusine</h3>
        <form className="checkbox-wrapper" onChange={this.filterCuisine}>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="ni"
              name="cuisine"
              value="1"
            />
            <label htmlFor="ni" className="form-check-label">
              North Indian
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="si"
              name="cuisine"
              value="2"
            />
            <label htmlFor="si" className="form-check-label">
              South Indian
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="chinese"
              name="cuisine"
              value="3"
            />
            <label htmlFor="chinese" className="form-check-label">
              Chinese
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="ff"
              name="cuisine"
              value="4"
            />
            <label htmlFor="ff" className="form-check-label">
              Fast Food
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="sf"
              name="cuisine"
              value="5"
            />
            <label htmlFor="sfi" className="form-check-label">
              Street Food
            </label>
          </div>
        </form>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios';

const url = "https://restaurant-apis.onrender.com/restaurants/"

export default class FilterCost extends Component {
  filterCost = (event) => {
    const mealId = this.props.mealId
    const cost = event.target.value.split("-")
    let lcost = cost[0];
    let hcost = cost[1];
    let costUrl;
    sessionStorage.setItem("lcost", lcost)
    sessionStorage.setItem("hcost", hcost)
    let cuisineId = sessionStorage.getItem("cuisineId");

    if(event.target.value === '') {
      costUrl = `${url}${mealId}`
    } 
    if(mealId && lcost && hcost){
      costUrl = `${url}${mealId}?lcost=${lcost}&&hcost=${hcost}`
    } 
    if(mealId && cuisineId && lcost && hcost) {
      costUrl = `${url}${mealId}?cuisineId=${cuisineId}&&lcost=${lcost}&&hcost=${hcost}`
    } 
    
    axios.get(costUrl).then((res) => {
      this.props.restPerCost(res.data)
    })
  }

  render() {
    return (
        <div className="cost">
        <h3>Cost For Two</h3>
        <form className="radio-wrapper" onChange={this.filterCost}>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="lt500"
              name="cost"
              value="1-500"
            />
            <label htmlFor="lt500" className="form-check-label">
              Less than 500
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="5to1k"
              className="form-check-input"
              name="cost"
              value="500-1000"
            />
            <label htmlFor="5to1k" className="form-check-label">
              500 to 1000
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="1kto15"
              className="form-check-input"
              name="cost"
              value="1000-1500"
            />
            <label htmlFor="1kto15" className="form-check-label">
              1000 to 1500
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="15to2k"
              name="cost"
              value="1500-2000"
            />
            <label htmlFor="15to2k" className="form-check-label">
              1500 to 2000
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="abv2k"
              name="cost"
              value="2000-3000"
            />
            <label htmlFor="abv2k" className="form-check-label">
              2000+
            </label>
          </div>
        </form>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios';

import HeaderRes from "./HeaderRes";
import FilterCuisine from "./Filter/FilterCuisine";
import FilterCost from "./Filter/FilterCost";
import FilterSort from "./Filter/FilterSort";
import FilterDisplay from "./FilterDisplay";
import FilterLocation from './Filter/FilterLocation';
import Paginations from './Paginations';

import "../../styles/cuisine.css";

const resturl = "https://restaurant-apis.onrender.com/restaurants/";

export default class Restaurants extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: '',
    }
  }

  setFilterData = (data) => {
    this.setState({
      restaurants: data
    });
  }

  render() {
    return (
      <div>
        <HeaderRes />

        <h1 className="cuisine-h1">Breakfast Places in Mumbai</h1>

        <main className="container d-lg-flex mb-4">
          <p id="filter-btn" className="container d-lg-none">
            <span className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-filter" aria-controls="collapse-filter">
              Filter/Sort
            </span>
          </p>

          <section className="filter-section p-1 collapse d-lg-block" id="collapse-filter">
            <h2 className="p-0 fw-semibold">Filters</h2>
            <h3 className="p-0">Select Location</h3>
            <FilterLocation rests={this.state.restaurants} restPerLocation={(data) => this.setFilterData(data)} />

            <FilterCuisine mealId={this.props.match.params.mealId} restPerCuisine={(data) => this.setFilterData(data)} />

            <FilterCost mealId={this.props.match.params.mealId} restPerCost={data => this.setFilterData(data)} />

            <FilterSort restPerSort={data => this.setFilterData(data)} />
          </section>

          <section className="content-section m-0 m-lg-3">
            <FilterDisplay restaurants={this.state.restaurants} />
          </section>
        </main>
        <Paginations rests={this.state.restaurants} restPerPage={(data) => this.setFilterData(data)} />
      </div>
    );
  }

  componentDidMount() {
    const mealId = this.props.match.params.mealId;
    sessionStorage.setItem('mealId', mealId)
    axios.get(`${resturl}${mealId}`, { method: 'GET' })
      .then((res) => this.setState({ restaurants: res.data }));
  }
};

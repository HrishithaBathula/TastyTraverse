import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";

const qurl = "https://restaurant-apis.onrender.com/quicksearch";

export class QuickSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quicksearch: '',
    }
  }

  render() {
    console.log(this.state.quickmeals)
    
      return (
        <div className={"container menu-container mt-3 mb-5"}>
          <div className={"row gap-4"}>
            <QuickDisplay mealData={this.state.quicksearch} />
          </div>
        </div>
      );

  }

  componentDidMount() {
    fetch(`${qurl}`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({ quicksearch: data})
      })
  }
}


export default QuickSearch;

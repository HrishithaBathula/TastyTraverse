import React from 'react'
import {Link} from "react-router-dom";
import "../../styles/home.css";

const QuickDisplay = (props) => {
    const listMeal = ({mealData}) => {
        if(mealData) {
            return mealData.map(item => {
                return (
                    <Link className="col-12 col-md-3 card p-0" key={item._id} to={`/restaurants/${item.mealtype_id}`}>
                        <div className="row g-0" style={{ height: "100%" }}>
                            <div className="col-5">
                                <img src={item.meal_image} alt={item.mealtype} className="img-fluid" width="100%" />
                            </div>
                            <div className="col-7">
                                <div className="card-body">
                                    <h4 className="card-title">{item.mealtype}</h4>
                                    <p className="card-text">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
        
        
    }
        
    return (
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay
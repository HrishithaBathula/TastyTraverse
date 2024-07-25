import React  from "react";
import { Link } from "react-router-dom";
import PlaceOrderAuth from "./PlaceOrderAuth";
import HeaderRes from "../Restaurants/HeaderRes";
import "../../styles/cuisine.css";

const PlaceOrder = (props) => {
    const renderOrder = (props) => {
        const userInfo = sessionStorage.getItem("userInfo");
        if(userInfo === null || undefined) {
            return(
            <>
                <HeaderRes />
                <div className="container">
                    <p className="w-sm-50 p-3">
                        Please Login to place order! If not already login, click 'Signup'
                        and login {":)"}
                    </p>
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </>
            )
        } else {
           let data = JSON.parse(userInfo);
            // console.log(data);
            const rest_name = props.match.params.restName;
            return(
                <PlaceOrderAuth orderData={data} restName={rest_name} history={props.history}/>
            )
        }
    }

    return (
        <>
        {renderOrder(props)}
        </>
    )

 
}

export default PlaceOrder;


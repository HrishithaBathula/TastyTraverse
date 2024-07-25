import React, {useState, useEffect} from 'react'
import { useLocation} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import "../../styles/checkout.css";
// import config from '../../config';

const stripePromise = loadStripe('pk_test_51Nx2IESFreFK53KxacuZoVV5CPmKX1PhPk5uBGE97C4SCidxIwRMjOVhzirxTsLVIEUHoeAdPqix6m7Ak2p8nhvI00HGykImn9');

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const product = useLocation().state;

    useEffect(()=>{
        fetch("https://restaurant-apis.onrender.com/create-payment-intent", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({product})
        })
        .then((res)=>res.json())
        .then(data => {
            console.log(data);
            setClientSecret(data.clientSecret)
        });
    },[product])

    const appearance = {
        theme: 'flat'
    }

    const options = {
        clientSecret,
        appearance
    }
  return (
    <div className='check-out-body'>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm items={product}/>
            </Elements>
        )}
    </div>
  )
}

export default Checkout

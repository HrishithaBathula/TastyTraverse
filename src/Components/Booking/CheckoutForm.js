import React, {useState, useEffect} from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({items}) => {
    const stripe = useStripe();
    const elements = useElements();

    // const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [ message, setMessage] = useState(null);

    useEffect(()=> {
        if(!stripe) return;

        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
        
        if(!clientSecret){
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
            switch(paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded");
                    break;
                case "processing":
                    setMessage("Your payment is processing");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again");
                    break;
                default:
                    setMessage("Something went wrong");
                    break;
            }
        })
    },[stripe]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!stripe || !elements) return;
        setIsLoading(true);
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "https://zomato-z123.netlify.app/vieworders",
                // receipt_email: email,
            }
        }) ;
        if(error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured");
        }
        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

  return (
    <form id='payment-form' onSubmit={handleSubmit} className='check-out-form'>
        {/* <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
        /> */}
        <PaymentElement id='payment-element' options={paymentElementOptions} />
        <div id='price' className='mb-4'>
            <b>Total Cost:</b> <span>{items.cost}</span>
        </div>
        <button disabled={isLoading || !stripe || !elements} id='submit'>
            <span id="button-text">
                {isLoading ? <div className='spinner'>Loadding...</div> : "Pay now"}
            </span>
        </button>

        {message && <div id="message">{message}</div>}
    </form>
  )
}

export default CheckoutForm

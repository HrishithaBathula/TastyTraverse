import React, { useState } from 'react'
import HeaderRes from "../Restaurants/HeaderRes";

const purl = "https://restaurant-apis.onrender.com/placeorders";

const PlaceOrderAuth = (props) => {
    const {orderData, restName, history} = props
    const initialValues = {
        id: Math.floor(Math.random() * 10000),
        date: new Date(),
        rest_name: restName,
        name: orderData.name,
        email: orderData.email,
        phone: orderData.phone,
        address: orderData.address,
        cost: sessionStorage.getItem("totalPrice"),
        menuItems: JSON.parse(sessionStorage.getItem("menuList"))
    };

    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };
    
      const checkout = () => {
        console.log(values);
        fetch(purl, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then(history.push({pathname: "/checkout", state: values}));
      };
    
    return (
        <>
          <HeaderRes />
          <div className="container">
            <h3 className='text-center mt-3' style={{'color': 'orange', 'font-weight': '600'}}>Order for "{restName}"</h3>
            <div className="row text-light">
              <div className="col-md-6 form-group mb-2">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className="form-control border border-dark"
                />
              </div>
              <div className="col-md-6 form-group mb-2">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  className="form-control border border-dark"
                />
              </div>
              <div className="col-md-6 form-group mb-2">
                <label htmlFor="phone" className="form-label">
                  Phone:
                </label>
                <input
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  className="form-control border border-dark"
                />
              </div>
              <div className="col-md-6 form-group mb-2">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <textarea
                  value={values.address}
                  name="address"
                  onChange={handleChange}
                  className="form-control border border-dark"
                  cols="6"
                  rows="2"
                ></textarea>
              </div>

              <h4 className='text-dark my-3'>Total Price: Rs. {values.cost}</h4>
              <div>
                {values.menuItems.map((item)=> {
                  return(
                    <div className='text-dark'>
                      <div className='container row'>
                        <p className='col-4'>{item["menu-name"]} - {item.count} items</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <button className="btn btn-success w-25 mx-auto" onClick={checkout}>
                checkout
              </button>
            </div>
            
          </div>
        </>
      );
}

export default PlaceOrderAuth
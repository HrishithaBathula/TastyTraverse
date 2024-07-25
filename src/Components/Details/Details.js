import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

import "../../styles/details.css";
import "../../styles/menu.css";

import HeaderRes from "../Restaurants/HeaderRes";
import MenuList from "./Menus/MenuList";
import TabData from "./TabData";
import ModalMenu from "./ModalMenu";

const durl = "https://restaurant-apis.onrender.com/details/";
const menuUrl = "https://restaurant-apis.onrender.com/menu/";
const url = "https://restaurant-apis.onrender.com/menuitems";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: "",
      menu: "",
      orderId: "",
      userOrderData: "",
      totalPrice: "",
    };
  }

  addCart = (data) => {
    console.log(data)
    this.setState({ orderId: data });
    sessionStorage.setItem("menuId", this.state.orderId);
  };

  proceed = () => {
    const menuId = sessionStorage.getItem("menuId");
    const restId = this.state.details.restaurant_id;
    sessionStorage.setItem("restId", restId);
    let oid = [];

    menuId.split(",").map((item) => {
      return oid.push(parseInt(item));
    });
    console.log(oid)

    fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(oid),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("menuData:", data);
        this.setState({ userOrderData: data });

        let totalPrice = 0;
        let menuList = [];
        data.map((item) => {
          let count = 0;
          for (let i = 0; i < oid.length; i++) {
            if (item.menu_id === oid[i]) {
              count = count + 1;
              totalPrice = totalPrice + parseFloat(item.menu_price);
            }
          }
          return (menuList.push({
            "order_id": item.menu_id,
            "count": count,
            "menu-name": item.menu_name
          }));
        })
        sessionStorage.setItem("totalPrice", totalPrice);
        sessionStorage.setItem("menuList", JSON.stringify(menuList));
        this.setState({ totalPrice: totalPrice });
      });
  };

  proceedPay = () => {
    this.props.history.push(`/placeorder/${this.state.details.restaurant_name}`)
  }

  render() {
   
    return (
      <div>
        <HeaderRes />

        <section className="container-fluid img-gallery position-relative">
          <img src={this.state.details.restaurant_thumb} alt={this.state.details.restaurant_name} width="100%" />
          <button
            type="button"
            className="btn gallery-btn"
          >
            Click to see Image Gallery
          </button>
        </section>

        {/* <!-- modal image gallery trigger --> */}
        {/* {this.state.details && <ImageGallery images={this.state.details.image_gallery} />} */}

        <section className="container main-section mt-5">
          <h1 className="h1 text-start" id="res-title">
            {this.state.details.restaurant_name}
          </h1>
          <div className="d-flex text-center">
            <div className="menu-wrapper">
              <TabData details={this.state.details} />

              {/* <!-- Modal button --> */}
              <Link
                to={`/menu/${this.state.details.restaurant_id}`}
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#staticOrder"
                id="menu-order"
              >
                Order Menu
              </Link>
            </div>

          </div>
          {/* <!-- Modal trigger --> */}
          <div className="modal fade" id="staticOrder" aria-hidden="true">
            <ModalMenu details={this.state.details} menus={this.state.menu} finalOrder={data=>this.addCart(data)} proceed={this.proceed} />
          </div>

          {/* <!-- Modal identity trigger --> */}
          <div className="modal fade" id="staticIdentity" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title">{this.state.details.restaurant_name}</h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <MenuList menus={this.state.userOrderData} />
                </div>
                <div className="modal-footer justify-content-around align-items-center p-0">
                  <div className="d-flex align-items-center">
                    <h2 className="subtotal">Subtotal</h2>
                    <h4>Rs. {this.state.totalPrice}</h4>
                  </div>
                  <button
                    type="button"
                    id="pay-btn"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#staticIdentity"
                    onClick={this.proceedPay}
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  async componentDidMount() {
    const restId = this.props.match.params.id;

    const response = await axios.get(`${durl}${restId}`, { method: "GET" });
    //console.log(response.data[0])

    const menuData = await axios.get(`${menuUrl}${restId}`);
    //console.log(menuData.data)

    this.setState({ details: response.data[0], menu: menuData.data });
  }
}

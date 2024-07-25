import React, { Component } from "react";
import MenuContent from "./MenuContent";
// import MenuBtns from "./MenuBtns";
import MenuBtnText from "./MenuBtnText";


export default class MenuList extends Component {
    constructor() {
        super();
        this.state = {
            addCount: 0,
            subCount: 0
        }
    }
    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.setState({addCount: this.state.addCount + 1});
        this.props.finalOrder(this.orderId);
        // console.log(this.state.addCount)

    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1) {
           this.orderId.splice(this.orderId.indexOf(id), 1);
        }
        this.setState({subCount: this.state.subCount - 1});
        this.props.finalOrder(this.orderId);
        // console.log(this.state.subCount)

    }



    // renderCart = (orders) => {
    //     if(orders) {
    //         return orders.map((item, index) => {
    //             return <b key={index}>{item}</b>
    //         })
    //     }
    // }

    renderMenu = (props) => {
        const {menus} = props
        if(menus) {
            return menus.map((item) => (
                <div className="row menu-row border-bottom d-flex justify-content-xl-around mb-3" key={item.menu_id}>
                    {/* <p>item added = {this.renderCart(this.orderId)}</p> */}
                    <MenuContent item={item}/>
                    {/* <MenuBtns item={item} placeOrder={()=>this.placeOrder(item.menu_id)} removeOrder={()=>this.removeOrder(item.menu_id)}/> */}
                    <MenuBtnText 
                        item={item} 
                        placeOrder={()=>this.placeOrder(item.menu_id)} 
                        removeOrder={()=>this.removeOrder(item.menu_id)} 
                    />
                
                </div>
            ))
        }
        
    }
  render() {
    return (
        <>{this.renderMenu(this.props)}</>
    )
  }
}

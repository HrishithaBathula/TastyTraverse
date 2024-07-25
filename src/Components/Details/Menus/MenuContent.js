import React from "react";
import "../../../styles/menu.css";

const MenuContent = ({item}) => {
  return (
    <div className="col-8 order-content">
      <div className="veg border border-success">
        {(item.menu_type === "vegetarian") ? (
          <div className="circle"></div>
        ) : (
          <div className="circle nveg"></div>
        )}
      </div>
      <div className="w-100">
        <h4>{item.menu_name}</h4>
        <h5>Rs. {item.menu_price}</h5>
        <p className="m-0 mb-3">{item.description}</p>
      </div> 
    </div>
  );
};

export default MenuContent;

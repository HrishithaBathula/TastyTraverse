import React from "react";


const MenuBtns = ({item, placeOrder, removeOrder}) => {
  return (
    <div className="col-3 order-img rounded-1">
      <img src={item.menu_image} alt={item.menu_name} className="w-100"/>
      <div className="d-flex">
        <button
          type="button"
          className="add rounded-1"
          onClick={placeOrder}
        >
          <span className="glyphicon glyphicon-plus">Add</span>
        </button>
        <button
          type="button"
          className="add sub rounded-1"
          onClick={removeOrder}
        >
          <span className="glyphicon glyphicon-minus">Sub</span>
        </button>
      </div>
    </div>
  );
};

export default MenuBtns;

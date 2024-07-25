import React from 'react'

const MenuBtnText = ({item, placeOrder, removeOrder}) => {    

    return (
        <div className="col-3 order-img rounded-1">
          <img src={item.menu_image} alt={item.menu_name} className="w-100"/>
          <div className="d-flex text-center align-items-center">
            <button
              type="button"
              className="add rounded-1"
              onClick={placeOrder}
            >
             +
            </button>
            {/* <button type='button' className="add bg-white rounded-1">
                <span className='w-25 text-dark'>{count}</span>
            </button> */}
            <button
              type="button"
              className="add sub rounded-1"
              onClick={removeOrder}
            >
             -
            </button>
          </div>
        </div>
      );
}

export default MenuBtnText
import React from "react";
import MenuList from "./Menus/MenuList";

const ModalMenu = ({ details, menus, finalOrder, proceed }) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">{details.restaurant_name}</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="close"
          ></button>
        </div>

        <div className="modal-body">
          <div className="row p-3">
            <MenuList
              menus={menus}
              finalOrder={finalOrder}
            />
          </div>
        </div>

        <div className="modal-footer justify-content-around align-items-center p-0">
          <button
            type="button"
            id="pay-btn"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#staticIdentity"
            onClick={proceed}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;

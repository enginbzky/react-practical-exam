import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cart4 } from "react-bootstrap-icons";
import { UserContext } from "../UserContext.js";

function Navbar() {
  const { cartItem } = useContext(UserContext);
  return (
    <>
      <div className="container row">
        <div className="under col-1">
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </div>
        <div className="col-1">
          <NavLink className="link" to="/products">
            Products
          </NavLink>
        </div>
        <div className="col-9"></div>
        <div className="col-1">
          <NavLink className="link" to="/basket">
            <Cart4 />
            <span className="cart-length">
              {cartItem.length === 0 ? "" : cartItem.length}
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;

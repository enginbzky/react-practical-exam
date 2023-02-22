import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import { UserContext } from "../UserContext.js";

function Basket() {
  const { cartItem } = useContext(UserContext);
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div>
      <Navbar />
      <h1 data-testid="title-Basket">Basket </h1>
      <div className="">
        {cartItem.map((item) => (
          <div className="containerBasket row" key={item.id}>
            <div className="col-2 border border-dark" border border-dark>
              <img
                className="cart-items-image"
                src={item.images[0]}
                alt={item.title}
              />
            </div>
            <div className="basketTitle col-5 border border-dark">
              <span className="text-bold">{item.title}</span>
              <br></br>
              <br></br>
              {item.description}
              <br></br>
              <br></br>
              {item.category}
            </div>
            <div className="col-5 border border-dark">
              Price: {item.price}
              <br></br> Count: {item.quantity}
              <br></br>
              <br></br>
              <span className="text-bold">
                Total : {item.quantity * item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price fs-1 fw-bold">Grand Total: {totalPrice}</div>
    </div>
  );
}

export default Basket;

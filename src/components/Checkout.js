import React from "react";
import "../style/css/Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStatevalue } from "../Data Layer/StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/shazam/2020-Genesis-G90-1940x500-Desktop-Qb4Gx._V404482443_.jpg"
          alt="ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

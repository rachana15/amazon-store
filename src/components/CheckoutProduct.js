import React from "react";
import "../style/css/CheckoutProduct.css";
import { useStatevalue } from "../Data Layer/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStatevalue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };
  return (
    <div class="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="img" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>
            <small>$</small> {price}
          </strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <button className="checkoutProduct__button" onClick={removeFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

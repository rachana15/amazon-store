import React from "react";
import "../style/css/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order__header">
        <p>
          <strong>Order Placed: </strong>
          {moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <CurrencyFormat
          renderText={value => (
            <>
              <p>
                <strong> Order Total:</strong>
                {value}
              </p>
            </>
          )}
          value={order.data.amount / 100}
          decimalScale={2}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <p className="order_id">
          <strong>Order id: </strong>
          {order.id}
        </p>
      </div>
      <div className="order__body">
        {order.data.basket?.map(item => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>
    </div>
  );
}

export default Order;

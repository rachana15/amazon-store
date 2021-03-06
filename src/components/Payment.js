import React, { useState, useEffect } from "react";
import "../style/css/Payment.css";
import { useStatevalue } from "../Data Layer/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Data Layer/reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStatevalue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  //   console.log("Secret is ---> ", clientSecret);
  //stripe funsctionality
  const handleSubmit = async event => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then(data => {
        //paymentIntent is payment confirmation

        const payementIntent = data.paymentIntent;

        // console.log("-------paymentIntent", data);

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(payementIntent.id)
          .set({
            basket: basket,
            amount: payementIntent.amount,
            created: payementIntent.created
          });
        dispatch({
          type: "EMPTY_BASKEY"
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("/orders");
      });
  };

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>Review your order</h2>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Dilevery Address</h3>
          </div>
          <div className="payment__adreess">
            <p>{user?.email}</p>
            <p>2801 S King Drive</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3> Your Cart </h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={value => (
                    <>
                      <h3>Total:{value}</h3>
                    </>
                  )}
                  value={getBasketTotal(basket)}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  class="stripe__button"
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  {" "}
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

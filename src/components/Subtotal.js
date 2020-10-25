import React from "react";
import "../style/css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "../Data Layer/StateProvider";
import { getBasketTotal } from "../Data Layer/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStatevalue();
  const history = useHistory();
  const calculatePrice = ({ basket }) => {
    basket.reduce((sum, i) => (sum += i.price), 0);
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

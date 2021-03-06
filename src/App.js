import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStatevalue } from "./Data Layer/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe("pk_test_4y9Fuug7CPBjAbHjj3ibYU3J00DY7VOMK6");

function App() {
  const [{ user }, dispatch] = useStatevalue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("the user is ----> ", authUser);
      if (authUser) {
        //user logged In
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

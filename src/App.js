import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStatevalue } from "./Data Layer/StateProvider";

function App() {
  const [{ user }, dispatch] = useStatevalue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is ----> ", authUser);
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;

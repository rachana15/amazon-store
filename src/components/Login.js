import React, { useState } from "react";
import "../style/css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import firebase from "firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch(error => alert(error.message));
  };
  const facebookSigin = e => {
    var provider = new firebase.auth.FacebookAuthProvider();

    provider.addScope("user_birthday");

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(authData) {
        console.log(authData);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1600px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sigin-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />{" "}
          <br />
          <button type="submit" className="login__siginButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>By continuing, you agree to Conditions of Use and Privacy Notice.</p>
        <button className="login__registerButton" onClick={register}>
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

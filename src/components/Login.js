import React, { useState } from "react";
import "../style/css/Login.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = e => {
    e.preventDefault();
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        //successfully created a new user with email and password
        console.log(auth);
      })
      .catch(error => alert(error.message));
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

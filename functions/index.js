const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("stripe secret key");

//API

//App Config
const app = express();
//Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
//API Routes

app.get("/", (request, response) => response.status(200).send("hello world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  //  console.log(
  //     "request is -------------------------------------",
  //     request.query
  //   );
  //   console.log("payment request recieved :", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//end point
//http://localhost:5001/app-237a1/us-central1/api

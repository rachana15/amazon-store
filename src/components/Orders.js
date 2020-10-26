import React, { Component, useEffect, useState } from "react";
import "../style/css/Orders.css";
import { useStatevalue } from "../Data Layer/StateProvider";
import Order from "./Order";
import { db } from "../firebase";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStatevalue();
  useEffect(() => {
    if (user) {
      //   console.log("userrr----------->>>>", );
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot =>
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  //   console.log("Your orders areeee-------------->", orders);
  return (
    <div className="orders">
      <h2>Your Orders:</h2>
      <div className="orders__container">
        {orders?.map(order => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

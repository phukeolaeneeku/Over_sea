import React, { useState } from "react";
import "./orderBill.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { useLocation } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderBill = () => {
  const [orders, setOrders] = useState([
    {
      orderID: 1,
      userID: 2,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          color: "colW",
          price: 10,
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          color: "colB",
          price: 10,
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Houngaloun",
    },
    {
      orderID: 2,
      userID: 1,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro2",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colW",
          size: "l",
        },

        {
          productID: 3,
          productName: "pro3",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "xl",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
    {
      orderID: 3,
      userID: 1,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Houngaloun",
    },
    {
      orderID: 4,
      userID: 3,
      products: [
        {
          productID: 1,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colB",
          size: "m",
        },
        {
          productID: 2,
          productName: "pro1",
          productType: "clothes",
          amount: 2,
          price: 10,
          color: "colBlue",
          size: "m",
        },
      ],
      orderDate: "10/12/2023",
      status: "pending",
      payment: "Bcel One",
      delivery: "Anousit",
    },
  ]);

  // users
  const [users, setUsers] = useState([
    { userID: 1, name: "John Doe", email: "john@gmail.com" },
    { userID: 2, name: "Sam", email: "sam@gmail.com" },
    { userID: 3, name: "Will", email: "wil@gmail.com" },
  ]);

  const filteredOrders = orders
    .filter((order) => order.orderID === 1) // Filter orders by orderID
    .map((order) => {
      const user = users.find((user) => user.userID === order.userID); // Find user details for the order

      // Calculate total price
      const totalPrice = order.products.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0);

      return {
        orderID: order.orderID,
        userID: order.userID,
        userName: user.name,
        products: order.products,
        orderDate: order.orderDate,
        status: order.status,
        payment: order.payment,
        delivery: order.delivery,
        totalPrice: totalPrice,
      };
    });

  // Completion
  let statusDelivery = "";
  if (filteredOrders) {
    filteredOrders.forEach((order) => (statusDelivery = order.status));
  }
  const [status, setStatus] = useState(statusDelivery);

  // Handle status
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(status);
  };

  return (
    <>
      <AdminMenu />
      <section id="abill">
        {filteredOrders.map((order) => (
          <div className="abill-detial" key={order.orderID}>
            <div className="container_Order_Bill">
              <Link to="/order-admin" className="back_Order_Bill">
                <FaAngleLeft id="box_icon_Back" />
                <p>Back</p>
              </Link>
              <h2>Order</h2>
              <div></div>
            </div>
            <div className="aguopoidHead">
              <div className="aidf">
                <p>OrderID: {order.orderID}</p>
                <p>UserID: {order.userID}</p>
                <p>Name: {order.userName}</p>
              </div>
            </div>
            <hr />
            <div className="abillGopBox">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Color</th>
                    <th>Size</th>
                  </tr>
                </thead>
                {order.products.map((product) => (
                  <tbody key={product.productID}>
                    <tr>
                      <td>{product.productName}</td>
                      <td>${product.price}</td>
                      <td>{product.amount}</td>
                      <td>{product.color}</td>
                      <td>{product.size}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <hr />
            <div className="atitlePrice">
              <h3>Total:</h3>
              <h3>${order.totalPrice}</h3>
            </div>
            <div className="aplace-on">
              <p>Payment date: {order.orderDate}</p>
              <p>Payment method: {order.payment}</p>
              <form onSubmit={handleSubmit}>
                <div className="status">
                  <div className="url">
                    <label htmlFor="chinaToLaoURL">url China to Lao:</label>
                    <input
                      type="text"
                      id="chinaToLaoURL"
                      name="chinaToLaoURL"
                      placeholder="url delivery from china"
                    />
                    <button onClick={""}>add</button>
                  </div>
                  <div className="url">
                    <label htmlFor="branTobranURL">url Bran to Bran:</label>
                    <input
                      type="text"
                      id="branTobranURL"
                      name="branTobranURL"
                      placeholder="url delivery bran to bran"
                    />
                    <button onClick={""}>add</button>
                  </div>
                </div>
                <div className="status btn">
                  <button type="submit" className="aplace_form_button ">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default OrderBill;

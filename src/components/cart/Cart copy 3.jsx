import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import productImage from "../../img/productImage.png";
import { AiOutlineDelete } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "./cart.css";
import axios from "axios";
import Payment from "./Payment";

const Cart = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [show_payment, set_show_payment] = useState(false);
  const productDatas = {};
  var user_id = null;
  if (localStorage.getItem("user")) {
    user_id = JSON.parse(window.localStorage.getItem("user")).user_id;
  }

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  

  // Group orders by store ID
  const ordersByStore = {};

  cartItems.forEach((order) => {
    const { items } = order; // Extract the items array from the current order

    items.forEach((item) => {
      const { product } = item; // Extract the product object from the current item
      const { store_name } = product; // Extract the store name from the product object

      // If there's no array for the current store name in ordersByStore, create one
      if (!ordersByStore[store_name]) {
        ordersByStore[store_name] = [];
      }

      // Push the current order into the array corresponding to the store name
      ordersByStore[store_name].push(order);
    });
  });

  // console.log("My product: ", JSON.stringify(cartItems));
  // console.log("Order by store: ", JSON.stringify(ordersByStore));

  const handlePay = () => {
    set_show_payment(true);
  };

  const [orderItems, setOrderItems] = useState([]);

  console.log(orderItems)

  return (
    <>
      {show_payment ? (
        <Payment orders={cart_items} order_from="cart" onPay={handlePay} />
      ) : (
        <>
          <Header />
          <div className="box_cart_container">
            <Link to="/" className="box_container_back_icons_back">
              <IoIosArrowBack id="icons_back" />
              <p>Back</p>
            </Link>
            {cartItems.length === 0 ? (
              <p className="no-reviews-message">No Product</p>
            ) : (
              <div>
                {Object.keys(ordersByStore).map((store_name) => {
                  let totalQuantity = 0;
                  let totalPrice = 0;
                  let store_id = null;

                  return (
                    <div key={store_name}>
                      <h2>Shop: {store_name}</h2>

                      {ordersByStore[store_name].map((order, index) => (
                        
                        <div key={index}>
                          
                          <p hidden>{store_id = order.store}</p>
                          {order.items.map((item, itemIndex) => {
                            totalQuantity += item.quantity;
                            totalPrice += item.price * item.quantity;

                            return (
                              <div className="box_container_cart" key={item.id}>
                                <div className="box_item_gourp">
                                  <div className="box_item_image">
                                    <img
                                      src={item.product.images}
                                      alt={item.product.name}
                                      style={{ width: "100px" }}
                                    />
                                    <div className="box_item_text">
                                      <p>name: {item.product.name}</p>
                                      <p>color: {item.color}</p>
                                      <p>size: {item.size}</p>
                                      <p>
                                        price:{" "}
                                        {parseFloat(item.price).toLocaleString(
                                          "en-US",
                                          {
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                            useGrouping: true,
                                          }
                                        )}{" "}
                                        Kip
                                      </p>
                                    </div>
                                    <div className="box_icon_order">
                                      <div className="btnicon_delete_order">
                                        <AiOutlineDelete id="btnicon_delete" />
                                      </div>
                                      <div className="box_item_icon">
                                        <div
                                          className="icon_minus_plus"
                                        >
                                          -
                                        </div>
                                        <span>{item.quantity}</span>
                                        <div
                                          className="icon_minus_plus"
                                        >
                                          +
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                      <div className="box_item_total">
                        <div className="cart_Total_box">
                          <h3>Cart Total</h3>
                          <div className="box_item_total_text">
                            <p>Quantity:</p>
                            <p>
                              {" "}
                              {parseFloat(totalQuantity).toLocaleString(
                                "en-US",
                                {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                  useGrouping: true,
                                }
                              )}
                            </p>
                          </div>
                          <hr />
                          <div className="box_item_total_text">
                            <h3>Total: </h3>
                            
                            <p>
                              {parseFloat(totalPrice).toLocaleString("en-US", {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                                useGrouping: true,
                              })}{" "}
                              Kip
                            </p>
                          </div>
                          <div className="btn">
                            <button
                              type="submit"
                              className="checkout_btn"
                            >
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <Menu />
        </>
      )}
    </>
  );
};

export default Cart;

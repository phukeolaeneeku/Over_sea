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

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleIncrement = (itemId) => {
    updateQuantity(
      itemId,
      cartItems.find((item) => item.id === itemId).quantity + 1
    );
  };
  
  const handleDecrement = (itemId) => {
    const currentQuantity = cartItems.find(
      (item) => item.id === itemId
    ).quantity;
    if (currentQuantity > 1) {
      updateQuantity(itemId, currentQuantity - 1);
    }
  };
  

  // Group orders by store ID
  const ordersByStore = {};
  cartItems.forEach((order) => {
    const { store } = order;
    if (!ordersByStore[store]) {
      ordersByStore[store] = [];
    }
    ordersByStore[store].push(order);
  });

  console.log("My product: ", JSON.stringify(cartItems));
  console.log("Order by store: ", JSON.stringify(ordersByStore));

  const handlePay = () => {
    set_show_payment(true);
  };

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
                {Object.keys(ordersByStore).map((storeId) => {
                  let totalQuantity = 0;
                  let totalPrice = 0;

                  return (
                    <div key={storeId}>
                      <h2>Store {storeId}</h2>
                      {ordersByStore[storeId].map((order, index) => (
                        <div key={index}>
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
                                          onClick={() =>
                                            handleDecrement(item.id)
                                          }
                                        >
                                          -
                                        </div>
                                        <span>{item.quantity}</span>
                                        <div
                                          className="icon_minus_plus"
                                          onClick={() =>
                                            handleIncrement(item.id)
                                          }
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
                            <button type="submit" className="checkout_btn">
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

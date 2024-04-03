import React, { useState, useEffect } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const editCartItemQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeCartItem = productId => {
    const updatedCart = cartItems.filter(item => item.product.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const CartItem = ({ item }) => {
    const handleDecrease = () => {
      const newQuantity = Math.max(1, item.quantity - 1); // Ensure quantity doesn't go below 1
      editCartItemQuantity(item.product.id, newQuantity);
    };

    const handleIncrease = () => {
      const newQuantity = item.quantity + 1;
      editCartItemQuantity(item.product.id, newQuantity);
    };

    const handleRemove = () => {
      removeCartItem(item.product.id);
    };

    return (
      <div className="cart-item">
        <div>{item.product.name}</div>
        <div>Price: ${item.price}</div>
        <div>
          Quantity: {item.quantity}
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    );
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.product.id} item={item} />
      ))}
    </div>
  );
};

export default ShoppingCart;

import React from "react";

const initialData = {
  cart: [],
  isToggle: false,
  showAddedToCart: false,
  addToCart: ()=>{},
  reduceCart: ()=>{},
  removeCartItem: ()=>{},
  deleteCart: ()=>{},
  toggleHandler: ()=>{},
  addedToCartHandler: ()=>{},
  isCartAvailable: ()=>{}
};

const CartContext = React.createContext(initialData);

export default CartContext;

import React from "react";

const initialData = {
  cart: [],
  isToggle: false,
  addToCart: ()=>{},
  reduceCart: ()=>{},
  removeCartItem: ()=>{},
  deleteCart: ()=>{},
  toggleHandler: ()=>{},
  isCartAvailable: ()=>{}
};

const CartContext = React.createContext(initialData);

export default CartContext;

import { useEffect, useReducer, useState } from "react";
import CartContext from "./cart-context";

let initialState = {
  items: []
};

const storeCart = (cartItem)=>{
  localStorage.setItem('cart', JSON.stringify(cartItem));
};

const cartReducer = (state, action)=>{

  if(action.type === 'CHECK'){
    return {
      items: action.val
    }
  }

  if(action.type === 'ADD'){
    let updatedItems;
    const itemIndex = state.items.findIndex(item => item.id === action.val.id);
    const existingIteim = state.items[itemIndex];
    if(existingIteim){
      const updatedItem = {
        ...existingIteim,
        quantity: existingIteim.quantity + 1
      }
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
      
    }
    else {
      updatedItems = state.items.concat(action.val);
    }
    
    storeCart(updatedItems);
    return {
      items: updatedItems
    };

  }

  if(action.type === 'REDUCE'){
    let updatedItems;
    const itemIndex = state.items.findIndex(item => item.id === action.id);
    const existingIteim = state.items[itemIndex];
    if(existingIteim.quantity !== 1){
      const updatedItem = {
        ...existingIteim,
        quantity: existingIteim.quantity - 1
      }
      updatedItems = [...state.items];
      updatedItems[itemIndex] = updatedItem;
      storeCart(updatedItems);
      return {
      items: updatedItems
    }
    }
    
  }

  if(action.type === 'DELETE-ID'){
    let updatedItems;
    const itemIndex = state.items.findIndex(item => item.id === action.id);
    if(itemIndex >= 0){
    updatedItems = state.items.filter(item => item.id !== action.id);
    }

    storeCart(updatedItems);
    return {
      items: updatedItems
    }

  }

if(action.type === 'EMPTY'){
  localStorage.removeItem('cart');
  return {
    items: []
  };
}

  return initialState
};

const CartProvider = function(props){

  const [isToggle, setIsToggle] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartState, dispatchState] = useReducer(cartReducer, initialState);
  

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('cart')));
    initialState = {
      items: cart
    }
  }, [cartState.items, setCart]);


  const toggleHandler = ()=> setIsToggle(preState => !preState);

  const isCartAvailable = (item)=>{
    dispatchState({type: 'CHECK', val: item});
  };

  const addToCart =(item)=>{
    dispatchState({type: 'ADD', val: item});
  };

  const reduceCart = (id)=>{
    dispatchState({type: 'REDUCE', id});
  };

  const deleteCartItem = (id)=>{
    dispatchState({type: 'DELETE-ID', id: id});
  };

  const deleteCart = ()=>{
    dispatchState({type: 'EMPTY'});
  };

  const cartContext ={
    cart: cart || [],
    isToggle,
    toggleHandler,
    addToCart,
    reduceCart,
    removeCartItem: deleteCartItem,
    isCartAvailable,
    deleteCart
  }

  return <CartContext.Provider value={cartContext}>
      {props.children}
  </CartContext.Provider>
};

export default CartProvider;
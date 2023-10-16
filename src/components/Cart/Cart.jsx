import classes from './Cart.module.css';

import cartIcon from '../../assets/cart.png';
import { useContext } from 'react';
import CartContext from '../util/cart-context';
import { NavLink } from 'react-router-dom';

const Cart = function(){

  const cartCtx = useContext(CartContext);
  const { cart } = cartCtx;

  const toggleClose =()=>{
    if(cartCtx.isToggle){
      cartCtx.toggleHandler();
      return
    }
    else{
      return
    }
  };

  const totalCarts = cart.length > 0 ? cart.reduce((acc, item) => acc + item.quantity ,0) : 0; 

  return <li className={classes.cart}>
    <NavLink to='/carts' onClick={toggleClose}>
      <div className={classes.cartContainer}>
        <img src={cartIcon} alt='cart'/>
        <span className={classes.count}>{ totalCarts }</span>
      </div>
      
    </NavLink>
  </li>
};

export default Cart;
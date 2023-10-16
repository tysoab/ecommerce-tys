import { useContext } from 'react';
import classes from './CartList.module.css';
import CartContext from '../util/cart-context';
import deleteIcon from '../../assets/delete.jpg';

const CartList = function({cart}){

  const cartCtx = useContext(CartContext);

  const deleteItemhandler = ()=>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
    cartCtx.removeCartItem(cart.id);
    }
  };

  return <div className={classes['cartList-container']}>
    <img src={cart.image} alt={cart.title} />
    <div className={classes.title}>
      <h3>{cart.title}</h3>
      <div className={classes['quantity-action']}>
        <span onClick={()=> cartCtx.addToCart(cart)}>+</span>
        <span onClick={()=> cartCtx.reduceCart(cart.id)}>-</span>
      </div>
    </div>
    <div>
      <h4>Price: $ {cart.price.toFixed(2)}</h4>
      <p>Quantity: {cart.quantity}</p>
    </div>
    <div onClick={deleteItemhandler}>
      <img src={deleteIcon} alt={cart.title} className={classes.deleteIcon}/>
    </div>
  </div>
};

export default CartList;
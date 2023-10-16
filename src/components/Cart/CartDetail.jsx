import { useContext } from "react";
import ContentWrapper from "../UI/content-wrapper";
import CartContext from "../util/cart-context";
import CartList from "./CartList";

import classes from './CartDetail.module.css';
import deleteIcon from '../../assets/delete.jpg';
import { useNavigate } from "react-router-dom";

const CartDetail = function(){

  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);
  const { cart } = cartCtx;
  let content = <p>Loading</p>;

  const deleteCartHandler = ()=>{
    const proceed = window.confirm('Are you sure?');
    if(proceed){
      cartCtx.deleteCart();
    }
  };

  if(cart){
    content = cart.map(cart => <CartList key={cart.id} cart={cart} />);
  }

  let TotalPrice = <div className={classes.totalP}>
    <h2>Total Price:</h2>
    <h3>$ {(cart.reduce((acc, item) => acc + (item.quantity * item.price) ,0)).toFixed(2)}</h3>
  </div>

  return <>
  <ContentWrapper>
    <div className={classes.carts}>
    <h2>{cart.length === 0 ? 'Cart is empty' : 'Carts:'}</h2>
    {cart.length > 0 &&
    <button onClick={deleteCartHandler}>
      <img src={deleteIcon} alt='delete' /> 
      Empty Cart
      </button>
    } 
    </div>
    {content}
  </ContentWrapper>
  <ContentWrapper>
    {TotalPrice}
  </ContentWrapper>
  <ContentWrapper>
    <p onClick={()=> navigate('../')} className={classes.continueS}>Continue shopping</p>
  </ContentWrapper>
  </>
};
export default CartDetail;
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import AddedToCart from '../components/UI/AddedToCart'

import classes from './RootLayout.module.css';
import { useContext } from "react";
import CartContext from "./util/cart-context";

const RootLayout = function(){

  const cartCtx = useContext(CartContext);

  return(<>
    {cartCtx.showAddedToCart && <AddedToCart />}
    <Header />
    <main className={classes.main}>
    <Outlet />
    </main>
    <footer>
      <p>designed by tysoab || tysoab@gmail.com </p>
    </footer>
    </>
  );
};

export default RootLayout;
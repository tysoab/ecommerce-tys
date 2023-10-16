import { useContext, useState } from 'react';
import Cart from '../Cart/Cart';
import classes from './Header.module.css';
import SearchBar from './SearchBar';
import ToggleBtn from './ToggleBtn';
import Menu from './Menu';
import NavbarLink from './NavbarLink';
import CartContext from '../util/cart-context';

const Header = function(){

  const cartCtx = useContext(CartContext);


  return <header className={classes.header}>
    <div className={classes.logo}>FakeStore</div>

    <div className={`${classes.hWrapper} ${cartCtx.isToggle ? classes.toggleClose : ''}`}>
    <ToggleBtn onToggle={()=> cartCtx.toggleHandler()} />
    <SearchBar />
    <NavbarLink />
    </div>
    <div className={classes.cartMenu}>
    <Cart />
    <Menu onToggle={()=> cartCtx.toggleHandler()} />
    </div>
  </header>
};

export default Header;
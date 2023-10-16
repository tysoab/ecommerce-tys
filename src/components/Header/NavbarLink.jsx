import { NavLink } from 'react-router-dom';
import classes from './NavbarLink.module.css';
import { useContext } from 'react';
import CartContext from '../util/cart-context';

const NavbarLink = function(){

  const cartCtx = useContext(CartContext);

  const toggleHandler = ()=>{
    if(cartCtx.isToggle){
      cartCtx.toggleHandler();
    }else{
      return
    }
  };

  return <nav className={classes.navlink}>
    <li><NavLink
    className={({ isActive }) =>
      isActive ? classes.active : undefined
    }
    end
     to='/' onClick={toggleHandler}>Home</NavLink></li>
    <li><NavLink
    className={({ isActive }) =>
      isActive ? classes.active : undefined
    }
    end
     to='/products' onClick={toggleHandler}>Products</NavLink></li>
    <li><NavLink to='/user?account=login'
     className={({ isActive }) =>
          isActive ? classes.active : undefined
        }
        end
     onClick={toggleHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
      </svg>
      </NavLink></li>
  </nav>
};

export default NavbarLink;
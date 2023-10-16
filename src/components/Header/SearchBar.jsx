import { redirect, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './SearchBar.module.css';
import { useContext, useState } from 'react';
import CartContext from '../util/cart-context';

const SearchBar = function(){

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const cartCtx = useContext(CartContext);

  const inputChangeHandler = (event)=>{
    setSearchQuery(event.target.value);
  };

  const submitHandler = (event)=>{
    event.preventDefault();
    if(searchQuery === ''){
      return;
    }

    navigate(`/search-results?search=${searchQuery}`);
    setSearchQuery('');
    if(cartCtx.isToggle){
      cartCtx.toggleHandler();
    }
  };

  return <form className={`${classes.searchBar}`} onSubmit={submitHandler}>
    <input type="search" 
    onChange={inputChangeHandler}
    value={searchQuery}
    placeholder="Search products, brands and categories" />
    <Button title='Search' type='submit'/>
  </form>
};

export default SearchBar;
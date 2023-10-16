import Button from '../UI/Button';
import { Link } from 'react-router-dom';

import classes from './productsItem.module.css';
import { useContext } from 'react';
import CartContext from '../util/cart-context';
import { addToCartHandler } from '../util/button-actions';

const ProductsItem = function({product}){

  const cartCtx = useContext(CartContext);

  return <div className={classes.productsItem}>
    <Link to={`/${product.id}`}>
  <img src={product.image} alt={product.title} />
  </Link>
  <div>
    <h3 className={classes.title}>{product.title}</h3>
  
  <div className={classes.actions}>
    <div>
    <p>${(product.price).toFixed(2)}</p>
    <p>Rating: {product.rating.rate}</p>
    </div>
    <Button title='Add to Cart' type='button' onClick={()=> addToCartHandler(product, cartCtx)} />
  </div>
  </div>
  </div>
};

export default ProductsItem;
import { Link } from 'react-router-dom';
import Button from '../UI/Button.jsx';
import classes from './ProductsList.module.css';
import { useContext } from 'react';
import CartContext from '../util/cart-context.js';
import { addToCartHandler } from '../util/button-actions.js';

const ProductsList = function({product}){

  const cartCtx = useContext(CartContext);

  return <div className={classes.productsList}>
    <Link to={`/${product.id}`}>
    <img src={product.image} alt={product.title} />
    </Link>
    <div>
      <Link to={`/${product.id}`}>
      <h3>{product.title}</h3>
      </Link>
      <p>Rating: {product.rating.rate}</p>
    </div>
    <div>
      <p>${(product.price).toFixed(2)}</p>
      <Button title='Add to Cart'type='button' onClick={()=> addToCartHandler(product, cartCtx)} />
    </div>
  </div>
};
export default ProductsList;
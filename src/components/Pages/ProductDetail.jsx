import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../util/http";
import ProductsItem from "./ProductsItem";

import classes from './ProductDetail.module.css';
import Button from "../UI/Button";
import { addToCartHandler } from "../util/button-actions";
import { useContext } from "react";
import CartContext from "../util/cart-context";
import ContentWrapper from "../UI/content-wrapper";

const ProductDetail = function(){
  const params = useParams();

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['products', params.id],
    queryFn: ({signal})=> fetchProducts({signal, productId: params.id})
  });

  const cartCtx = useContext(CartContext);
  
  let content;
  
  if(isLoading){
    content = <p>Loading...</p>
  }

  if(isError){
    content = <p>{error}</p>
  }

  if(data){
    content = <div className={classes.product}>
    
  <img src={data.image} alt={data.title} />

  <div>
    <h3 className={classes.title}>{data.title}</h3>
  
  <div className={classes.actions}>
    <div>
    <p>${(data.price).toFixed(2)}</p>
    <p>Rating: {data.rating.rate}</p>
    </div>
    <Button title='Add to Cart' type="button" onClick={()=> addToCartHandler(data, cartCtx)} />
  </div>
  </div>

  <div className={classes.description}>
    <h4>Description:</h4>
    <p>{data.description}</p>
  </div>
  </div>
  }
  
  return <ContentWrapper className={classes.productDetail}>
    {content}
  </ContentWrapper>
};
export default ProductDetail;
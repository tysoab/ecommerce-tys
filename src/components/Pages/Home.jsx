import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../util/http";
import ProductsItem from "./ProductsItem";

import classes from './Home.module.css';
import ContentWrapper from "../UI/content-wrapper";
import ProductsCat from "./ProductsCat";

const HomePage = function(){

  const {data, isLoading, isError, error} = useQuery({
    queryKey: 'products',
    queryFn: fetchProducts
  });

  let content;
  if(isLoading){
    content = <p>Loading...</p>
  }

  if(isError){
    content = <p>{error}</p>
  }

  if(data){
    const copyOfData = data.slice(0,9);
    content = copyOfData.map(product => <ProductsItem key={product.id} product={product} />)
  }

  return <>
  <ContentWrapper className={classes['product-container']}>
  {content}
  </ContentWrapper>
  <ProductsCat category='electronics'/>
  <ProductsCat category='jewelery'/>
  </>
};
export default HomePage;
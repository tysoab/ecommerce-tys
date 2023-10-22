import { useQuery } from "@tanstack/react-query";
import ContentWrapper from "../UI/content-wrapper";
import { fetchProducts } from "../util/http";
import ProductsItem from "./ProductsItem";

import classes from './ProductsCat.module.css';

const ProductsCat = function({category}){


  const {data: fetchedData, isLoading, isError, error} = useQuery({
    queryKey: ['products', {category}],
    queryFn: fetchProducts
  });

  let data;

  if(fetchedData){
    data = fetchedData.filter(product => product.category === category);
  }

  let content;
  if(isLoading){
    content = <p>Loading...</p>
  }

  if(isError){
    content = <p>{error}</p>
  }

  if(data){
    content = data.map(product => <ProductsItem key={product.id} product={product} />);
  }

  return <ContentWrapper className={classes['productsCat-container']}>
    <h2 className={classes.title}>{category}</h2>
    <main className={classes.productsCat}>
      {content}
    </main>
  </ContentWrapper>
};

export default ProductsCat;
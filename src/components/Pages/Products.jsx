import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../util/http";
import ProductsList from "./ProductsList";

import classes from './Products.module.css';
import ContentWrapper from "../UI/content-wrapper";
import { useRef, useState } from "react";

const Products = function(){

  const [inputFilter, setInputFilter] = useState('');
  let isFiltered = inputFilter !== '';
  let filterOption = [];
  const {data: fetchedData, isLoading, isError, error} = useQuery({
    queryKey: ['products'],
    queryFn: ({signal})=>fetchProducts({signal:signal, categories: ''})
  });

  let data = isFiltered ? fetchedData.filter(product =>
  product.category === inputFilter) : fetchedData ;

  if(fetchedData){
    const categories = (new Set(fetchedData.map(dataCat => dataCat.category)));
    filterOption = [...categories];
  }
  
  const filterChangeHandler = (event)=>{
    if(event.target.value === ''){
      return;
    }
    setInputFilter(event.target.value);
  };


  let content;

  if(isLoading){
    content = <p>Loading...</p>
  }

  if(isError){
    content = <p>{error}</p>
  }

  if(data){
    content = data.map(product => <ProductsList key={product.id} product={product} />);
  }

  return <ContentWrapper>
    <div className={classes.filter}>
      <h4>Filter:</h4>
      <select
      onChange={filterChangeHandler}
      value={inputFilter}
      >
        <option value=''></option>
        {filterOption.length > 0 &&
          filterOption.map(option => <option value={option}>{option}</option>)
        }
      </select>
    </div>
    {content}
  </ContentWrapper>
};
export default Products;
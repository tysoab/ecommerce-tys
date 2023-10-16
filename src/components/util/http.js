import { QueryClient } from "@tanstack/react-query";
import { json } from "react-router-dom";

export const queryClient = new QueryClient();

export const fetchProducts = async({searchQuery, categories, productId, signal})=>{

  let url = 'https://fakestoreapi.com/products';
  if(searchQuery){
    url = `https://fakestoreapi.com/products/category/${searchQuery}`;
  }

  if(productId){
    url += '/' + productId;
  }

  const response = await fetch(url, {signal: signal});
  if(!response.ok){
    throw json({message: 'Failed to load products'}, {status: 500});
  }

  const responseData =await response.json();
  return responseData;
};


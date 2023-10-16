import { useSearchParams } from "react-router-dom";
import ContentWrapper from "../UI/content-wrapper";
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from "../util/http";
import ProductsList from "./ProductsList";

const SearchResults = function(){

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');

  const {data: fetchData, isLoading, isError, error} = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: ({signal})=> fetchProducts({signal: signal})
  });

  let content, data;

  if(fetchData){
    data = fetchData.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
  }
  


  if(isLoading){
    content = <p>Loading</p>
  }
if(isError){
  content = <p>{error}</p>
}

if(data){
  content = data.map(product => <ProductsList key={product.id} product={product} />)
}

  return <ContentWrapper>
    <h2 style={{marginBottom: '30px'}}>Search results:</h2>

  <div>
    {content}
  </div>
  </ContentWrapper>
};

export default SearchResults;
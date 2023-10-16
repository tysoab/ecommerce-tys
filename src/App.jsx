import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './components/Pages/Home';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './components/util/http';
import ErrorPage from './components/UI/Error';
import { Suspense, lazy, useContext, useEffect } from 'react';
import CartContext from './components/util/cart-context';

const Products = lazy(()=> import('./components/Pages/Products'));
const ProductDetail = lazy(()=> import('./components/Pages/ProductDetail'));
const CartDetail = lazy(()=> import('./components/Cart/CartDetail'));
const SearchResults = lazy(()=> import('./components/Pages/SearchResults'));
const User = lazy(()=> import('./components/User/User'));

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />,
  children: [
    {index: true, element: <HomePage />},
    {path: 'products', element: <Suspense fallback={<p className='lazy-loading'>Loading...</p>}>
      <Products />
      </Suspense>},
    {path: '/:id',
    id: 'product-detail',
     element: <Suspense fallback={<p className='lazy-loading'>Loading...</p>}>
      <ProductDetail />
     </Suspense>},
    {path: 'carts', element: <Suspense fallback={<p className='lazy-loading'>Loading...</p>}>
      <CartDetail />
    </Suspense>},
    {path: 'search-results', element: <Suspense fallback={<p className='lazy-loading'>Loading...</p>}>
      <SearchResults />
    </Suspense>},
    {path: 'user', element: <Suspense fallback={<p className='lazy-loading'>Loading...</p>}>
      <User />
    </Suspense>}
  ],
  errorElement: <ErrorPage />
}
]);

function App() {

  const cartCtx = useContext(CartContext);

  useEffect(()=>{
    const isCart = JSON.parse(localStorage.getItem('cart'));
    if(isCart){
      cartCtx.isCartAvailable(isCart);
    }
  }, []);

  return(
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
  );
}

export default App

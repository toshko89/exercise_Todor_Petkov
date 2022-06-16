import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGroceriesState } from './app/groceries.js';
import Header from './components/Header';
import Home from './components/Home';
import { getProducts } from './services/productService.js';

function App() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await getProducts();
        setProducts(res)
      } catch (error) {
        throw new Error(error)
      }
    })();
  }, [])

  return (
    <>
      <Header products={products} setProducts={setProducts} />
      <Home products={products} setProducts={setProducts}/>
    </>
  );
}

export default App;

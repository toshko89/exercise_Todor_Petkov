import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getProducts } from './services/productService.js';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

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
      <Routes>
        <Route path="/" exact element={<Home products={products} setProducts={setProducts} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path='*' element={<Navigate to="/" replace />}></Route>
      </Routes>
    </>
  );
}

export default App;

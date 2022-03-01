import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './pages/Product';
import Catalogue from './pages/Catalogue';
import Register from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogue />}  />
        <Route path="/products/:productId" element={<Product />}  />
        <Route path="/shop/register" element={<Register />} />
        <Route path="/shop/auth" element={<Login />} />
        <Route path="/shop/checkout" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Catalogue from './pages/Catalogue';
import Register from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Catalogue />}  />
        <Route path="/products/:productId" element={<Product />}  />
        <Route path="/shop/register" element={<Register />} />
        <Route path="/shop/auth" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

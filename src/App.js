import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Catalogue from './pages/Catalogue';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Catalogue />}  />
        <Route path="/products/:productId" element={<Product />}  />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import Broadcast from '../components/Broadcast';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Broadcast />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;

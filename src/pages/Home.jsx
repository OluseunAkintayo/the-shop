import React from 'react';
import Broadcast from '../components/Broadcast';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Broadcast />
      <Navbar open={open} setOpen={setOpen} />
      <Slider />
      <Categories />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;

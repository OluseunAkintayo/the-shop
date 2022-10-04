import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<Navbar />
			<Slider />
			<Products />
			<Footer />
		</>
	)
}

export default Home
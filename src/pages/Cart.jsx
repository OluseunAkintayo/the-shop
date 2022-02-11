import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const CartWrapper = styled.section``;

const Cart = () => {
  return (
    <CartWrapper>
      <Navbar />

      <Footer />
    </CartWrapper>
  )
}

export default Cart
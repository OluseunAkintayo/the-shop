import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const CartWrapper = styled.section``;
const CartContainer = styled.div`
  padding: 1rem;
`;
const Title = styled.h1`

`;

const CartProducts = styled.div``;
const CartSummary = styled.div``;

const Cart = () => {
  return (
    <CartWrapper>
      <Navbar />
      <CartContainer>
        <Title>Your Cart</Title>
        <CartProducts>
          
        </CartProducts>
        <CartSummary>

        </CartSummary>
      </CartContainer>
      <Footer />
    </CartWrapper>
  )
};

export default Cart;
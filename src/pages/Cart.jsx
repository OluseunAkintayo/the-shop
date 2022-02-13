import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import CartItem from '../components/CartItem';


const CartWrapper = styled.section``;
const CartContainer = styled.div`
  padding: 1rem;
`;
const Title = styled.h1`
  text-align: center;
`;
const CartProducts = styled.div`
  margin: 2rem auto 1rem auto;
  width: 100%;
  max-width: 750px;
`;


const CartSummary = styled.div``;

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("the-cart"));
  const [tempCart, setTempCart] = React.useState([]);
  const [qty, setQty] = React.useState(1);
  
  React.useEffect(() => {
    setTempCart(cart);
  }, []);

  const removeItem = id => {
    let x = tempCart.filter(item => item.id !== id);
    console.log(x);
    setTempCart(x);
    // console.log(cart);
    localStorage.setItem("the-cart", JSON.stringify(x));
  }

  return (
    <CartWrapper>
      <Navbar />
      <CartContainer>
        <Title>Your Cart</Title>
        <CartProducts>
          {
            tempCart !== [] && tempCart.map(item => <CartItem key={item.id} item={item} removeItem={removeItem} />)
          }
        </CartProducts>
        <CartSummary>

        </CartSummary>
      </CartContainer>
      <Footer />
    </CartWrapper>
  )
};

export default Cart;
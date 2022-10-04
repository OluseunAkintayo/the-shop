import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Button, Typography } from '@mui/material';
import CartItem from '../components/CartItem';
import { clearCart } from '../redux/slice';
import { toast } from 'react-toastify';


const CartWrapper = styled.section``;
const CartContainer = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  max-width: 1200px;
  min-height: calc(100vh - 193px);
  margin: 0 auto;
`;
const Title = styled.h1`
  text-align: center;
  color: rgba(0,0,0,0.6);
`;
const CartProducts = styled.div`
  margin: 2rem auto 1rem auto;
  width: 100%;
  @media(max-width: 400px) {
    overflow-x: auto;
  }
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 22.5vh;
  width: 100%;
  position: relative;
  .emptyCartTxt {
    background: teal;
    outline: 1px solid teal;
    color: white;
    width: 10rem;
    &:hover {
      background: white;
      color: teal;
      outline: 1px solid teal;
      border: none;
    }
  }
`;
const CartSummary = styled.div`
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  border-top: 1px solid teal;
  font-weight: 600 !important;
  .clear-btn {
    border: 1px solid #D70900;
    height: 3rem;
    color: #D70900;
    max-width: 250px;
    &:hover {
      border: 1px solid #D70900;
      background-color: #D7090040;
    }
    @media(max-width: 375px) {
      max-width: unset;
      width: 100%;
    }
  }
  @media(max-width: 375px) {
    flex-direction: column-reverse;
  }
`;
const CartTotals = styled.div`
  width: 100%;
  max-width: 250px;
  color: rgba(0,0,0,0.65);
  .cart-btn {
    background-color: teal;
    height: 3rem;
    margin-top: 1rem;
    &:hover {
      background-color: rgba(0, 128, 128, 0.7);
    }
  }
  @media(max-width: 375px) {
    max-width: unset;
    width: 100%;
  }
`;
const Item = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  padding: 0.25rem 0;
`;

const Cart = ({ cart, clear }) => {
  const [bagTotal, setBagTotal] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.added
    });
    setBagTotal(total);
  }, [cart]);

  React.useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <CartWrapper>
      <Navbar />
      <CartContainer>
        <Title>Your Cart</Title>
        <CartProducts>
          {
            cart.length === 0 ?
            <Progress>
              <Typography>No items in cart</Typography>
              <Button className="emptyCartTxt" onClick={() => navigate("/")}>Shop now</Button>
            </Progress> :
            cart.map(item => <CartItem key={item.id} item={item} toast={toast} />)
          }
        </CartProducts>
        <CartSummary>
          <Button className="clear-btn" onClick={clear} fullWidth variant="outlined">Clear Cart</Button>
          <CartTotals>
            <div>
              <Item>
                <div>Sub-total:</div>
                <div>{bagTotal.toLocaleString()}</div>
              </Item>
              <Item>
                <div>Tax:</div>
                <div>{(bagTotal * 0.075).toLocaleString()}</div>
              </Item>
              <Item>
                <div>Total</div>
                <div>{(bagTotal * 1.075).toLocaleString()}</div>
              </Item>
            </div>
            <Button className="cart-btn" fullWidth variant="contained">Checkout</Button>
          </CartTotals>
        </CartSummary> 
      </CartContainer>
      <Footer />
    </CartWrapper>
  )
};

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(clearCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
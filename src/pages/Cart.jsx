import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import { clearCart } from '../redux/actions';


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
  max-height: 60vh;
  overflow: auto;
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
`;
const CartSummary = styled.div`
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ClearBtn = styled.div`
  flex: 1;
`;
const CartTotals = styled.div`
  flex: 2;
`;
const Item = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: space-between;
`;

const Cart = (props) => {
  const { bag, clear } = props;
  const [bagTotal, setBagTotal] = React.useState(0);

  React.useEffect(() => {
    let total = 0;
    bag.forEach(item => {
      total += item.price * item.added
    });
    setBagTotal(total);
  });
  
  return (
    <CartWrapper>
      <Navbar />
      <CartContainer>
        <Title>Your Cart</Title>
        <CartProducts>
          {
            bag.length === 0 ?
            <Progress>
              <h2>Your cart is empty</h2>
            </Progress> :
            bag.map(item => <CartItem key={item.id} item={item} />)
          }
        </CartProducts>
        <CartSummary>
          <ClearBtn>
            <Button onClick={clear}>Clear Cart</Button>
          </ClearBtn>
          <CartTotals>
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
          </CartTotals>
        </CartSummary>
      </CartContainer>
      <Footer />
    </CartWrapper>
  )
};

const mapStateToProps = state => {
  return {
    bag: state.shop.cart
  }
}
const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(clearCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
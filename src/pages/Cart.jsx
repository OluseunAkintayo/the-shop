import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import { clearCart } from '../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartWrapper = styled.section``;
const CartContainer = styled.div`
  padding: 1rem;
`;
const Title = styled.h1`
  text-align: center;
  color: rgba(0,0,0,0.6);
`;
const CartProducts = styled.div`
  margin: 2rem auto 1rem auto;
  width: 100%;
  max-width: 750px;
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.2); 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.3); 
  }
  @media(max-width: 400px) {
    overflow-x: auto;
  }
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
  position: relative;
  .emptyCartTxt {
    position: absolute;
    z-index: 5;
    bottom: 1rem;
    background: teal;
    color: white;
    width: 10rem;
    &:hover {
      background: white;
      color: teal;
      border: 1px solid teal;
    }
  }
`;
const CartSummary = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  border-top: 1px solid teal;
  font-weight: 600 !important;
  @media(max-width: 375px) {
    flex-direction: column-reverse;
  }
`;
const ClearBtn = styled.div`
  flex: 1;
  .clearBtn {
    background: #d92128;
    border: none;
    color: white;
  }
  @media(max-width: 375px) {
    width: 100%;
    margin-top: 1rem;
    ${Button} {
      width: 100%;
    }
  }
`;
const CartTotals = styled.div`
  width: 100%;
  max-width: 250px;
  color: rgba(0,0,0,0.65);
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
const EmptyCart = styled.img`
  max-height: 100%;
  object-fit: cover;
  @media(max-width: 625px) {
    max-width: 100%;
  }
`;

const Cart = (props) => {
  const { bag, clear } = props;
  const [bagTotal, setBagTotal] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    let total = 0;
    bag.forEach(item => {
      total += item.price * item.added
    });
    setBagTotal(total);
  }, [bag]);

  React.useEffect(() => {
    window.scrollTo(0,0);
  })
  
  return (
    <CartWrapper>
      <Navbar />
      <CartContainer>
        <Title>Your Cart</Title>
        <CartProducts>
          {
            bag.length === 0 ?
            <Progress>
              <EmptyCart src="https://adasglobal.com/img/empty-cart.png" />
              <Button className="emptyCartTxt" onClick={() => navigate("/")}>Shop now</Button>
            </Progress> :
            bag.map(item => <CartItem key={item.id} item={item} toast={toast} />)
          }
        </CartProducts>
        <CartSummary>
          <ClearBtn>
            <Button className='clearBtn' onClick={clear}>Clear Cart</Button>
          </ClearBtn>
          <ClearBtn></ClearBtn>
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
            <Button style={{ width: '100%'}}>Checkout</Button>
          </CartTotals>
        </CartSummary>
      </CartContainer>
      <Footer />
      <ToastContainer autoClose={3000} />
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
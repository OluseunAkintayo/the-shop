import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { Add, DeleteOutlined, Remove } from '@material-ui/icons';

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
const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: all ease 0.2s;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  &:hover {
    border-left: 1px solid rgba(0,0,0,0.2);
    border-right: 1px solid rgba(0,0,0,0.2);
    border-radius: 0.25rem;
  }
`;
const Image = styled.img`
  height: 6.5rem;
  width: 6.5rem;
  object-fit: contain;
  margin-right: 1rem;
`;
const ItemInfo = styled.div`
  flex: 6;
  color: rgba(0,0,0,0.6);
`;
const ItemName = styled.h3`
  font-weight: 500;
  font-size: 0.9rem;
`;
const ItemCategory = styled.p`
  margin: 0.75rem 0;
  font-weight: 300;
  font-size: 0.8rem;
`;
const QtyContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 2rem;
  text-align: center;
  padding: 0.25rem 0;
  outline: none;
  border: 1px solid teal;
`;
const ItemPrice = styled.div`
  flex: 1;
`;
const RemoveItem = styled.div`
  flex: 1;
  text-align: right;
  color: darkred;
  cursor: pointer;
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

  console.log({tempCart});

  return (
    <CartWrapper>
      <Navbar />
      <CartContainer>
        <Title>Your Cart</Title>
        <CartProducts>
          {
            tempCart !== [] && tempCart.map(item => (
              <CartItem key={item.id}>
                <Image src={item.image} alt='' />
                <ItemInfo>
                  <ItemName>{item.title}</ItemName>
                  <ItemCategory>N {item.price}</ItemCategory>
                  <QtyContainer>
                    <Add />
                    <Input type="number" defaultValue={item.added} />
                    <Remove />
                  </QtyContainer>
                </ItemInfo>
                <ItemPrice>
                  N{(item.added * item.price).toLocaleString()}
                </ItemPrice>
                <RemoveItem>
                  <DeleteOutlined onClick={id => removeItem(item.id)} />
                </RemoveItem>
              </CartItem>
            ))
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
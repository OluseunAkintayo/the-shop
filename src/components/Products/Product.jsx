import styled from 'styled-components';
import { connect } from 'react-redux';
import { Tooltip, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/slice';
import { Heart, PlusCircle } from 'react-feather';


const Image = styled.img`
  height: 80%;
  width: 80%;
  object-fit: contain;
  z-index: 2;
  transform: scale(0.8);
  transition: ease-in-out 0.2s;
`;

const Container = styled.div`
  /* flex: 1; */
  margin: 1rem;
  /* min-width: 250px; */
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    overflow: hidden;
    ${Image} {
      transform: scale(0.85);
    }
  }
  .cart-btn {
    background-color: teal;
    color: #FFFFFF;
    border-radius: 0 0 0.25rem 0.25rem;
    &:hover {
      background-color: rgba(0,128,128, 0.7);
    }
  }
`;

const Desc = styled.div`
  overflow: hidden;
  text-align: center;
  background: rgba(0,0,0,0.1);
  height: 50%;
  width: 100%;
  /* border-radius: 0 0 0.5rem 0.5rem; */
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  font-weight: 300;
  font-size: 0.75rem;
`;

const Title = styled.div`
  text-align: left;
  width: calc(100% - 4rem);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
`;

const Price = styled.div`
  width: 5rem;
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;
`;


const Product = ({ item, addToCart }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={item.image} onClick={() => navigate(`/products/${item.id}`)} />
      <Box sx={{ width: '100%', height: '20%' }}>
        <Desc>
          <Title>{item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}</Title>
          <Price>₦ {item.price.toLocaleString()}</Price>
        </Desc>
        <Box
          sx={{ 
            background: 'rgba(0,0,0,0.1)',
            width: '100%',
            height: '50%',
          }}
        >
          <Button fullWidth data-id={item.id} className="cart-btn" onClick={addToCart}>
            Add to cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
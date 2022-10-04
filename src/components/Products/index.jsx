import React from 'react';
import styled from 'styled-components';
import { CircularProgress, Grid } from '@mui/material';
import { useDispatch, useSelector, connect } from 'react-redux';
import { toast } from 'react-toastify';
import Product from './Product';
import { getItems, setCart } from '../../redux/slice';

const Container = styled.section`
  padding: 4rem 1rem 1rem 1rem;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
`;

const Products = ({ cart }) => {
	const dispatch = useDispatch();
	const { data, loading } = useSelector(state => state.shop.items);

	//add item to cart
	let tempCart = [];
  cart.forEach(item => tempCart.push(item));

  const addToCart = (event) => {
    let cartItem = tempCart.find(item => Number(item.id) === Number(event.target.dataset.id));
		console.log(cart);
    const cartItemIndex = tempCart.indexOf(cartItem);
    if(cartItem) {
      cartItem = { ...cartItem, added: cartItem.added + 1 };
      tempCart[cartItemIndex] = cartItem;
      dispatch(setCart(tempCart));
    } else {
      let newItem = [...data].find(item => Number(item.id) === Number(event.target.dataset.id));
      newItem = { ...newItem, added: newItem.added + 1 };
      tempCart = [...tempCart, newItem];
      dispatch(setCart(tempCart));
    }
    toast.success("Item added to cart!");
  };

  // load items on first render
	React.useEffect(() => {
		dispatch(getItems());
	}, []);

  return (
    <Container id="products">
      <Wrapper>
        <Grid container spacing={4}>
          {
            loading === true ? <Progress><CircularProgress size="5rem" /></Progress>
            : data.map(item => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <Product item={item} key={item.id} addToCart={addToCart} />
                </Grid>
              )
            })
          }
        </Grid>
      </Wrapper>
    </Container>
  );
};

// get cart from redux container and pass the same to the component props
const mapStateToProps = state => {
	return {
		cart: state.shop.cart,
	}
}

export default connect(mapStateToProps)(Products);
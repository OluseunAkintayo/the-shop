import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { CircularProgress } from '@material-ui/core';
import { loadItems, loadCart } from '../redux/actions';
import { connect } from 'react-redux';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
`;

const Products = (props) => {
  const { getItems, getCart, products, bag } = props;
  const [loading, setLoading] = useState(false);
  const productsUrl = "https://fakestoreapi.com/products";
  const getProducts = async URL => {
    setLoading(true);
    try {
      await fetch(URL).then(res => res.json()).then(result => {
        let newProducts = result.map(item => {
          return {
            ...item, added: 0
          }
        })
        getItems(newProducts);
        setLoading(false);
      })
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(productsUrl);
  }, []);

  // create a temporary cart
  let tempCart = [];
  bag.forEach(item => tempCart.push(item));

  const findItem = id => {
    let cartItem = tempCart.find(item => Number(item.id) === Number(id));
    const cartItemIndex = tempCart.indexOf(cartItem);
    if(cartItem) {
      cartItem = { ...cartItem, added: cartItem.added + 1 };
      tempCart[cartItemIndex] = cartItem;
      getCart(tempCart);
    } else {
      let newItem = products.find(item => Number(item.id) === Number(id));
      newItem = { ...newItem, added: newItem.added + 1 };
      tempCart = [...tempCart, newItem];
      getCart(tempCart);
    }
  };

  return (
    <Container>
      {
        loading === true ? <Progress><CircularProgress size="5rem" /></Progress>
        : products.map(item => <Product item={item} key={item.id} findItem={findItem} />)
      }
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (items) => dispatch(loadItems(items)),
    getCart: (items) => dispatch(loadCart(items)),
  }
}

const mapStateToProps = state => {
  return {
    products: state.shop.items,
    bag: state.shop.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
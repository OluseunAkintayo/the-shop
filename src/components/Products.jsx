import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { CircularProgress } from '@material-ui/core';
import { loadItems } from '../redux/actions';
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
  console.log(props);
  const { getItems } = props;
  // const dispatch = useDispatch();
  const [items, setItems] = useState([]);
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
        setItems(newProducts);
        getItems(newProducts);
        console.log(newProducts);
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

  let cart = JSON.parse(localStorage.getItem("the-cart")) || [];

  const findItem = id => {
    let cartItem = cart.find(item => item.id === id);
    const cartItemIndex = cart.indexOf(cartItem);
    if(cartItem) {
      cartItem = { ...cartItem, added: cartItem.added + 1 };
      cart[cartItemIndex] = cartItem;
    } else {
      let newItem = items.find(item => item.id === id);
      newItem = { ...newItem, added: newItem.added + 1 };
      cart = [...cart, newItem];
    }
    console.log(cart);
    localStorage.setItem("the-cart", JSON.stringify(cart));
  };

  return (
    <Container>
      {
        loading === true ? <Progress><CircularProgress size="5rem" /></Progress>
        : items.map(item => <Product item={item} key={item.id} findItem={findItem} />)
      }
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: (items) => dispatch(loadItems(items)),
  }
}

const mapStateToProps = state => {
  return {
    products: state.shop.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
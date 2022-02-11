import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { CircularProgress } from '@material-ui/core';

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

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const productsUrl = "https://fakestoreapi.com/products";
  const getProducts = async URL => {
    setLoading(true);
    try {
      await fetch(URL).then(res => res.json()).then(result => {
        console.log(result);
        setItems(result);
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

  const findItem = id => {
    let item = items.find(item => item.id === id)
    console.log(item);
  }

  return (
    <Container>
      {
        loading === true ? <Progress><CircularProgress size="5rem" /></Progress>
        : items.map(item => <Product item={item} key={item.id} findItem={findItem} />)
      }
    </Container>
  );
};

export default Products;
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.section`
  padding: 1rem;
`;

const Product = () => {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState([]);

  const { productId } = useParams();
  console.log(productId);
  const getProduct = async (id) => {
    setLoading(true);
    const productUrl = `https://fakestoreapi.com/products/${id}`;
    fetch(productUrl)
      .then(res => res.json())
      .then(result => {
        setLoading(false);
        setProduct(result);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }

  React.useEffect(() => {
    getProduct(productId);
  }, [productId]);

  console.log(product);

  return (
    <>
      <Navbar />
      <Container>
        product
      </Container>
    </>
  )
};

export default Product;
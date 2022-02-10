import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Button from '../components/Button';

const ProductWrapper = styled.section`
  padding: 2rem 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: rgba(0,0,0,0.6);
`;
const Category = styled.h3`
  text-align: center;
  color: rgba(0,0,0,0.4);
  text-transform: capitalize;
`;
const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  @media(max-width: 625px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  max-height: 90%;
  max-width: 100%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
  .desc {
    display: flex;
    align-items: center;
    /* background: pink; */
  }
`;
const Desc = styled.p`
  line-height: 1.75rem;
`;
const ItemRating = styled.div``;
const Price = styled.div`
  width: 6.5rem;
  height: 2.5rem;
  background: teal;
  outline: none;
  font-weight: 500;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
`;


const Product = () => {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState({});

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

  return (
    <>
      <Navbar />
      {
        loading === true ? <Progress><CircularProgress size="5rem" /></Progress>
        :
        <ProductWrapper>
          <Title>{product.title}</Title>
          <Category>{product.category}</Category>
          <ItemDetails>
            <ImageContainer>
              <Image src={product.image} alt="" />
            </ImageContainer>
            <InfoContainer>
              <Desc>{product.description}</Desc>
              <div className='desc'>
                <Price>N {product.price}</Price>
                <Button>Add to Cart</Button>
              </div>
            </InfoContainer>
          </ItemDetails>
        </ProductWrapper>
      }
      <Subscribe />
      <Footer />
    </>
  )
};

export default Product;
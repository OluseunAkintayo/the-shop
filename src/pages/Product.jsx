import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Add, Remove } from '@material-ui/icons';

const ProductWrapper = styled.section`
  padding: 2rem 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  color: rgba(0,0,0,0.6);
`;
const Category = styled.h3`
  color: rgba(0,0,0,0.4);
  text-transform: capitalize;
  font-style: italic;
`;
const ItemDetails = styled.div`
  display: flex;
  margin-top: 2rem;
  @media(max-width: 625px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 70vh;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
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
  margin-top: 2rem;
`;
const ItemRating = styled.div``;
const Price = styled.div`
  font-weight: 300;
  font-size: 1.5rem;
  color: darkslategray;
  margin: 1.5rem 0;
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 17.5rem;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  margin-right: 0.5rem;
`;
const FilterColor = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.25rem;
  background-color: ${props => props.color};
`;
const FilterSizeSelect = styled.select`
  margin-left: 0.5rem;
  padding: 0.25rem;
  cursor: pointer;
  border: 1px solid rgba(0,0,0,0.3);
`;
const Option = styled.option`
  padding: 0.5rem;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
`;
const QtyWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 2.5rem 1rem 0;
  .qtyActionIcon {
    color: teal;
    border: 1px solid teal;
    height: 2.375rem;
    width: 2.5rem;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    &:hover {
      color: whitesmoke;
      background-color: teal;
    }
  }
`;
const Input = styled.input`
  background: transparent;
  height: 2.375rem;
  width: 3rem;
  text-align: center;
  border: transparent;
  outline: 1px solid teal;
`;

const Product = () => {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState({});
  const [orderQty, setOrderQty] = React.useState(1);
  const { productId } = useParams();
  const sizes = ["XS", "S", "M", "L", "XL"];
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
          <ItemDetails>
            <ImageContainer>
              <Image src={product.image} alt="" />
            </ImageContainer>
            <InfoContainer>
              <Title>{product.title}</Title>
              <Category>{product.category}</Category>
              <Desc>{product.description}</Desc>
              <Price>N {product.price}</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color:</FilterTitle>
                  <FilterColor color="black" />
                  <FilterColor color="royalblue" />
                  <FilterColor color="orange" />
                </Filter>
                <Filter>
                  <FilterTitle>Size:</FilterTitle>
                  <FilterSizeSelect>
                    {sizes.map(size => <Option value={size} selected={size === "XS" && true}>{size}</Option>)}
                  </FilterSizeSelect>
                </Filter>
              </FilterContainer>
              <Actions>
                <QtyWrapper>
                  <Remove className="qtyActionIcon" onClick={() => setOrderQty(Number(orderQty) - 1)} />
                  <Input type="text" name="orderQty" value={orderQty} onChange={e => setOrderQty(e.target.value)} />
                  <Add className="qtyActionIcon" onClick={() => setOrderQty(Number(orderQty) + 1)} />
                </QtyWrapper>
                <Button>Add to Cart</Button>
              </Actions>
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
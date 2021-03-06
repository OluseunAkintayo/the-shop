import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { loadItem, loadCart } from '../redux/actions';
import { connect } from 'react-redux';
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
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
const Image = styled.img`
  max-height: 70vh;
  max-width: 100%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem;
  .desc {
    display: flex;
    align-items: center;
  }
`;
const Desc = styled.p`
  line-height: 1.75rem;
  margin-top: 2rem;
`;
const Price = styled.div`
  font-weight: 500;
  font-size: 1.75rem;
  color: teal;
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
    background: teal;
    color: white;
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    &:hover {
      color: whitesmoke;
      background-color: teal;
    }
  }
`;
const Input = styled.input`
  background: rgba(0, 128, 128, 0.1);
  width: 2rem;
  height: 1.75rem;
  text-align: center;
  border: transparent;
`;

const Product = (props) => {
  const { bag, getCart, product, products } = props;
  const [loading, setLoading] = React.useState(false);
  const [orderQty, setOrderQty] = React.useState(1);
  const { productId } = useParams();
  const sizes = ["XS", "S", "M", "L", "XL"];

  const reduceQty = () => {
    orderQty > 1 && setOrderQty(orderQty - 1)
  }

  const getProduct = async (id) => {
    setLoading(true);
    const productUrl = `https://fakestoreapi.com/products/${id}`;
    fetch(productUrl)
      .then(res => res.json())
      .then(result => {
        setLoading(false);
        props.getItem(result);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    getProduct(productId);
  }, [productId]);

  let tempCart = [];
  bag.forEach(item => tempCart.push(item));

  const findItem = id => {
    let cartItem = tempCart.find(item => Number(item.id) === Number(id));
    const cartItemIndex = tempCart.indexOf(cartItem);
    if(cartItem) {
      cartItem = { ...cartItem, added: cartItem.added + orderQty };
      tempCart[cartItemIndex] = cartItem;
      getCart(tempCart);
    } else {
      let newItem = products.find(item => Number(item.id) === Number(id));
      newItem = { ...newItem, added: newItem.added + orderQty };
      tempCart = [...tempCart, newItem];
      getCart(tempCart);
    }
  };

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
                  <FilterColor color="gray" />
                </Filter>
                <Filter>
                  <FilterTitle>Size:</FilterTitle>
                  <FilterSizeSelect>
                    {sizes.map((size, idx) => <Option key={idx + 1} value={size} selected={size === "XS" && true}>{size}</Option>)}
                  </FilterSizeSelect>
                </Filter>
              </FilterContainer>
              <Actions>
                <QtyWrapper>
                  <Remove className="qtyActionIcon" onClick={reduceQty} />
                  <Input type="number" min="1"
                    name="orderQty" value={orderQty}
                    onChange={e => setOrderQty(Number(e.target.value))}
                  />
                  <Add className="qtyActionIcon" onClick={() => setOrderQty(Number(orderQty) + 1)} />
                </QtyWrapper>
                <Button onClick={() => findItem(product.id)}>Add to Cart</Button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getItem: (item) => dispatch(loadItem(item)),
    getCart: (items) => dispatch(loadCart(items)),
  }
}

const mapStateToProps = state => {
  return {
    product: state.shop.item,
    products: state.shop.items,
    bag: state.shop.cart
  }
}


export default connect(mapStateToProps ,mapDispatchToProps)(Product);
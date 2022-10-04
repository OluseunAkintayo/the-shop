import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setCart, getItem } from '../redux/slice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, CircularProgress } from '@mui/material';
import { Plus, Minus } from 'react-feather';

const ProductWrapper = styled.section`
  padding: 0 1rem;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  color: rgba(0,0,0,0.6);
`;
const Category = styled.h3`
  color: rgba(0,0,0,0.4);
  text-transform: capitalize;
	font-weight: 400;
	font-size: 1rem;
`;
const ItemDetails = styled.div`
  display: flex;
	align-items: center;
	gap: 2rem;
  margin-top: 60px;
	min-height: calc(100vh - 193px);
  @media(max-width: 900px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
	max-height: 70vh;
	/* background-color: pink; */
  padding: 1rem;
`;
const Image = styled.img`

  max-width: 80%;
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
	margin-top: 0.5rem;
	.add-btn {
		border: 1px solid teal;
		color: teal;
	}
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

const Product = ({ products, product, cart }) => {
	const dispatch = useDispatch();
	const { loading } = useSelector(state => state.shop.item);
  const [orderQty, setOrderQty] = React.useState(1);
  const { id } = useParams();
	console.log(id);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const reduceQty = () => {
    orderQty > 1 && setOrderQty(orderQty - 1)
  }

  let tempCart = [];
  cart.forEach(item => tempCart.push(item));

  const addToCart = id => {
    let cartItem = tempCart.find(item => Number(item.id) === Number(id));
    const cartItemIndex = tempCart.indexOf(cartItem);
    if(cartItem) {
      cartItem = { ...cartItem, added: cartItem.added + orderQty };
      tempCart[cartItemIndex] = cartItem;
      dispatch(setCart(tempCart));
    } else {
      let newItem = products.find(item => Number(item.id) === Number(id));
      newItem = { ...newItem, added: newItem.added + orderQty };
      tempCart = [...tempCart, newItem];
      dispatch(setCart(tempCart));
    }
  };

	React.useEffect(() => {
    window.scrollTo(0, 0);
		dispatch(getItem(id));
		return () => null;
  }, [id]);

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
              <Price>₦{(product.price * 30).toLocaleString()}</Price>
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
                  <Minus className="qtyActionIcon" onClick={reduceQty} />
                  <Input type="number" min="1"
                    name="orderQty" value={orderQty}
                    onChange={e => setOrderQty(Number(e.target.value))}
                  />
                  <Plus className="qtyActionIcon" onClick={() => setOrderQty(Number(orderQty) + 1)} />
                </QtyWrapper>
                <Button className="add-btn" onClick={() => addToCart(product.id)}>Add to Cart</Button>
              </Actions>
            </InfoContainer>
          </ItemDetails>
        </ProductWrapper>
      }
      {/* <Subscribe /> */}
      <Footer />
    </>
  )
};

const mapStateToProps = state => {
  return {
    product: state.shop.item.data,
    products: state.shop.items.data,
    cart: state.shop.cart
  }
}


export default connect(mapStateToProps)(Product);
import React from 'react';
import styled from 'styled-components';
import { Plus, Trash, Minus } from 'react-feather';
import { setCart } from '../redux/slice';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tooltip, Button } from '@mui/material';

const CartProduct = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  transition: all ease 0.2s;
  border-top: 1px solid rgba(0,0,0,0.2);
  &:hover {
    background: #f5f5f5;
    border-radius: 0.25rem;
  }
`;
const Image = styled.img`
  height: 6rem;
  width: 6.5rem;
  object-fit: contain;
  margin-right: 1rem;
  padding: 0.25rem;
`;
const ItemInfo = styled.div`
  flex: 6;
  color: rgba(0,0,0,0.6);
  padding: 0.375rem;
`;
const ItemName = styled.h3`
  font-weight: 500;
  font-size: 0.9rem;
`;
const ItemUnitPrice = styled.p`
  margin: 0.75rem 0;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(0,0,0,0.6);
`;
const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  .qty-icons {
    background: teal;
    color: white;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;
const Input = styled.input`
  width: 3rem;
  height: 2rem;
  text-align: center;
  outline: none;
  border: none;
  background: rgba(0, 128, 128, 0.2);
`;
const ItemPrice = styled.div`
  flex: 1;
  text-align: right;
  padding: 0 0.375rem;
  color: rgba(0,0,0,0.6);
  font-weight: 500;
`;
const RemoveItem = styled.div`
  flex: 1;
  text-align: right;
  color: darkred;
  cursor: pointer;
  padding: 0 0.375rem;
`;

const CartItem = ({ item, cart, toast }) => {
  const dispatch = useDispatch();
  const [cartItemQty, setCartItemQty] = React.useState(item.added);
  let tempCart = [];
  cart.forEach(item => tempCart.push(item));
  let itemIndex = tempCart.indexOf(item);
  const onQtyChange = e => {
    let num = Number(e.target.value);
    setCartItemQty(num);
    item = { ...item, added: num }
    tempCart[itemIndex] = item;
    dispatch(setCart(tempCart));
  }
  const addQty = () => {
    setCartItemQty(Number(cartItemQty) + 1);
    item = { ...item, added: item.added + 1 }
    tempCart[itemIndex] = item;
    dispatch(setCart(tempCart));
  }
  const reduceQty = () => {
    if (cartItemQty > 1) {
      setCartItemQty(Number(cartItemQty) - 1)
      item = { ...item, added: item.added - 1 }
      tempCart[itemIndex] = item;
      dispatch(setCart(tempCart));
    }
  }

  const remove = param => {
    let res = cart.filter(item => Number(item.id) !== Number(param));
    console.log(res);
    dispatch(setCart(res));
    toast.success("Item removed from cart!");
  }

  return (
    <CartProduct>
      <Image src={item.image} alt='' />
      <ItemInfo>
        <ItemName>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </ItemName>
        <ItemUnitPrice>₦ {item.price.toLocaleString()}</ItemUnitPrice>
        <QtyContainer>
          <Minus className="qty-icons" onClick={reduceQty} />
          <Input type="number" min="1" name="cartItemQty" value={cartItemQty} onChange={onQtyChange} />
          <Plus className="qty-icons" onClick={addQty} />
        </QtyContainer>
      </ItemInfo>
      <ItemPrice>
        ₦{(item.added * item.price).toLocaleString()}
      </ItemPrice>
      <RemoveItem>
        <Tooltip title="Remove item" placement="top">
          <Trash className="removeItemIcon" onClick={() => remove(item.id)} />
        </Tooltip>
      </RemoveItem>
    </CartProduct>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(CartItem);
import React from 'react';
import styled from 'styled-components';
import { Add, DeleteOutlined, Remove } from '@material-ui/icons';
import { removeItem } from '../redux/actions';
import { connect } from 'react-redux';

const CartProduct = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: all ease 0.2s;
  border-top: 1px solid rgba(0,0,0,0.2);
  &:hover {
    background: #f5f5f5;
    border-radius: 0.25rem;
  }
`;
const Image = styled.img`
  height: 6.5rem;
  width: 6.5rem;
  object-fit: contain;
  margin-right: 1rem;
`;
const ItemInfo = styled.div`
  flex: 6;
  color: rgba(0,0,0,0.6);
`;
const ItemName = styled.h3`
  font-weight: 500;
  font-size: 0.9rem;
`;
const ItemCategory = styled.p`
  margin: 0.75rem 0;
  font-weight: 300;
  font-size: 0.8rem;
`;
const QtyContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 2rem;
  text-align: center;
  padding: 0.25rem 0;
  outline: none;
  border: 1px solid teal;
`;
const ItemPrice = styled.div`
  flex: 1;
`;
const RemoveItem = styled.div`
  flex: 1;
  text-align: right;
  color: darkred;
  cursor: pointer;
`;

const CartItem = ({ item, remove }) => {
  return (
    <CartProduct>
      <Image src={item.image} alt='' />
      <ItemInfo>
        <ItemName>{item.title}</ItemName>
        <ItemCategory>N {item.price}</ItemCategory>
        <QtyContainer>
          <Remove />
          <Input type="number" defaultValue={item.added} />
          <Add />
        </QtyContainer>
      </ItemInfo>
      <ItemPrice>
        N{(item.added * item.price).toLocaleString()}
      </ItemPrice>
      <RemoveItem>
        <DeleteOutlined onClick={() => remove(item.id)} />
      </RemoveItem>
    </CartProduct>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeItem(id)),
  }
}
export default connect(null, mapDispatchToProps)(CartItem);
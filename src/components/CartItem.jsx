import React from 'react';
import styled from 'styled-components';
import { Add, DeleteOutlined, Remove } from '@material-ui/icons';
import { removeItem } from '../redux/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(0,0,0,0.6);
`;
const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  .qty-icons {
    background: teal;
    color: white;
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
  }
`;
const Input = styled.input`
  width: 2rem;
  height: 1.75rem;
  text-align: center;
  outline: none;
  border: none;
  background: rgba(0, 128, 128, 0.1);
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

const CartItem = ({ item, remove }) => {
  return (
    <CartProduct>
      <Image src={item.image} alt='' />
      <ItemInfo>
        <ItemName>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </ItemName>
        <ItemUnitPrice>N {item.price}</ItemUnitPrice>
        <QtyContainer>
          <Remove className="qty-icons" />
          <Input type="number" defaultValue={item.added} />
          <Add className="qty-icons" />
        </QtyContainer>
      </ItemInfo>
      <ItemPrice>
        N{(item.added * item.price).toLocaleString()}
      </ItemPrice>
      <RemoveItem>
        <DeleteOutlined className="removeItemIcon" onClick={() => remove(item.id)} />
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
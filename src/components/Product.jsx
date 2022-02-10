import { AddShoppingCartOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';

const Info = styled.div`
  background: rgba(0,0,0,0.15);
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  opacity: 0;
  transition: all ease 0.5s;
  border-radius: 0.5rem;
`;

const Container = styled.div`
  flex: 1;
  margin: 0.25rem;
  min-width: 250px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   position: absolute;
//   background-color: khaki;
//   /* z-index: 2; */
// `;

const Image = styled.img`
  height: 70%;
  width: 80%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  cursor: pointer;
  background: white;
  margin: 0.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: ease 0.4s;
  &:hover {
    transform: scale(1.15);
    background: rgb(245,245,245);
  }
  .icon {
    color: rgba(0,0,0,0.7);
  }
`;

const Desc = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 2;
  bottom: 0;
  /* padding: 0.25rem 0; */
  text-align: center;
  background: rgba(0,0,0,0.1);
  height: 2.5rem;
  width: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  font-size: 0.75rem;
`;

const Title = styled.div`
  text-align: left;
  width: calc(100% - 4rem);
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
`;

const Price = styled.div`
  background: teal;
  width: 4rem;
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 500;
  color: #fff;
`;

const Product = ({ item }) => {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.image} />
      <Info>
        <Tooltip title="Add to cart">
          <Icon>
            <AddShoppingCartOutlined className="icon" />
          </Icon>
        </Tooltip>
        <Tooltip title="Add to favorites">
          <Icon>
            <FavoriteBorderOutlined className="icon" />
          </Icon>
        </Tooltip>
      </Info>
      <Desc>
        <Title>{item.title}</Title>
        <Price>N {item.price}</Price>
      </Desc>
    </Container>
  );
};

export default Product;
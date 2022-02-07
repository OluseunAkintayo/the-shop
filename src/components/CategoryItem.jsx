import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  flex: 1;
  min-width: 275px;
  margin: 0.25rem;
  height: 60vh;
  position: relative;
  overflow: hidden;
  &:hover {
    #info {
      transform: translate(0);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 245, 245, 0.8);
  transform: translate(-100%);
  transition: all 0.3s ease;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;
  text-align: center;
`;

const CategoryItem = ({ item }) => {
  const { img, title } = item;
  return (
    <Container>
      <Image src={img} alt="img" />
      <Info id="info">
        <Title>{title}</Title>
        <Button>Order Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
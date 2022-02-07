import { Fragment } from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "./data";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: rgba(0,0,0,0.7);
  padding: 2rem 1rem;
  text-align: center;
`;
const Categories = () => {
  return (
    <Fragment>
      <Title>Top Categories</Title>
      <Container>
        {
          categories.map(item => <CategoryItem key={item.id} item={item} />)
        }
      </Container>
    </Fragment>
  );
};

export default Categories;

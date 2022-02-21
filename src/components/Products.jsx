import styled from 'styled-components';
import Product from './Product';
import { CircularProgress } from '@material-ui/core';

const Container = styled.section`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
`;

const Products = (props) => {
  const { products, loading, findItem } = props;
  
  return (
    <Container id="products">
      {
        loading === true ? <Progress><CircularProgress size="5rem" /></Progress>
        : products.map(item => <Product item={item} key={item.id} findItem={findItem} />)
      }
    </Container>
  );
};

export default Products;
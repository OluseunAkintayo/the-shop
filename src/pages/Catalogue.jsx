import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import SliderII from '../components/Slider';

const Container = styled.div`

`;
const Title = styled.h3`
  padding: 1rem;
  color: rgba(0,0,0,0.6);
`;
const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(0,0,0,0.6);
  @media(max-width: 625px) {
    flex-direction: column;
  }
`;
const Filter = styled.div`
  margin: 1rem;
`;
const FilterText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;
const Select = styled.select`
  margin-left: 0.25rem;
  padding: 0.125rem;
  border: 1px solid rgba(0,0,0,0.3);
`;
const Option = styled.option`
  padding: 0.25rem 0;
`;

const Catalogue = () => {
  const colors = ["White", "Black", "Gray", "Blue"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const sortData = ["Newest", "Brand", "Price (asc)", "Price (desc)"]
  return (
    <Container>
      <Navbar />
      {/* <SliderII />
      <Categories /> */}
      <Title>Products</Title>
      <FilterWrapper>
        <Filter>
          <FilterText>Filter Items: </FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            {colors.map(item => <Option value={item} key={item}>{item}</Option>)}
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            {sizes.map(size => <Option value={size} key={size}>{size}</Option>)}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Items: </FilterText>
          <Select>
            <Option disabled selected>Choose</Option>
            {sortData.map(item => <Option value={item} key={item}>{item}</Option>)}
          </Select>
        </Filter>
      </FilterWrapper>
      <Products />
      <Subscribe />
      <Footer />
    </Container>
  )
}

export default Catalogue; 
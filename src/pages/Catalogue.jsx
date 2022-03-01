import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadItems, loadCart } from '../redux/actions';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import SliderII from '../components/Slider';
import Fuse from 'fuse.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const Container = styled.div`
  
`;

const Catalogue = ({ products, setItems, setCart, bag }) => {
  const [loading, setLoading] = useState(false);
  const [tempProducts, setTempProducts] = useState([]);
  const productsUrl = "https://fakestoreapi.com/products";
  const getProducts = async URL => {
    setLoading(true);
    try {
      await fetch(URL).then(res => res.json()).then(result => {
        let newProducts = result.map(item => {
          return { ...item, added: 0, price: item.price * 10 }
        });
        setItems(newProducts); // save items to redux state
        setTempProducts(newProducts);
        setLoading(false);
      })
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(productsUrl);
  }, []);

  // create a temporary cart
  let tempCart = [];
  bag.forEach(item => tempCart.push(item));

  //add item to cart
  const findItem = id => {
    let cartItem = tempCart.find(item => Number(item.id) === Number(id));
    const cartItemIndex = tempCart.indexOf(cartItem);
    if(cartItem) {
      cartItem = { ...cartItem, added: cartItem.added + 1 };
      tempCart[cartItemIndex] = cartItem;
      setCart(tempCart);
    } else {
      let newItem = products.find(item => Number(item.id) === Number(id));
      newItem = { ...newItem, added: newItem.added + 1 };
      tempCart = [...tempCart, newItem];
      setCart(tempCart);
    }
    toast.success("Item added to cart!");
  };
  
  // filter/sort params
  const [filterText, setFilterText] = React.useState('');
  const colors = ["White", "Black", "Gray", "Blue"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const sortData = ["Name", "Price (asc)", "Price (desc)"];
  
  // handle filter
  const handleChange = e => {
    let txt = e.target.value.toLowerCase();
    setFilterText(txt);
    if(txt === "name") {
      products.sort((x, y) => x.title.localeCompare(y.title));
    } else if(txt === "price (asc)") {
      products.sort(function(x, y) {
        return x.price - y.price
      });
    } else if(txt === "price (desc)") {
      products.sort(function(x, y) {
        return y.price - x.price
      });
    }
  }

  // implement search
  const searchParams = { keys: ["title"] };
  const fuse = new Fuse(tempProducts, searchParams);

  const search = params => {
    let res = fuse.search(params)
    res = res.map(product => {
      return product.item
    })
    console.log(res);
  }

  return (
    <Fragment>
      <ToastContainer autoClose={2500} />
      <Container>
        <Navbar search={search} />
        <SliderII />
        <Title>Products</Title>
        <FilterWrapper>
          <Filter>
            <FilterText>Sort Items: </FilterText>
            <Select name="filterText" onChange={handleChange}>
              <Option selected>Choose</Option>
              {sortData.map(item => <Option value={item} key={item}>{item}</Option>)}
            </Select>
          </Filter>
        </FilterWrapper>
        <Products
          products={products}
          loading={loading}
          findItem={findItem}
        />
        <Categories />
        <Subscribe />
        <Footer />
      </Container>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (items) => dispatch(loadItems(items)),
    setCart: (items) => dispatch(loadCart(items)),
  }
}

const mapStateToProps = state => {
  return {
    products: state.shop.items,
    bag: state.shop.cart
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
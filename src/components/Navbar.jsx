import React from 'react';
import styled from 'styled-components';
import { MenuOpen, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// left content start
const LeftContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.5rem;
  font-weight: bold;
`;

// left content end

// mid content start
const MidContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchComponent = styled.div`
  display: flex;
  border: 1px solid lightgray;
  padding: 0.375rem;
  margin-left: 1.5rem;
  border-radius: 0.25rem;
  .search-icon {
    color: lightgray;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
`;
// mid content end

// right content start
const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  font-size: 0.875rem;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  padding-right: 0.25rem;
  &:hover{
    color: rgba(0, 0, 0, 0.4);
  }
`;

const LinkItem = styled.div`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.6);
  padding: 0 0.25rem;
  &:hover{
    color: rgba(0, 0, 0, 0.4);
  }
`;
// right content end

const MobileMenu = styled.div`
  display: none !important;
  align-items: center;
  @media(max-width: 625px) {
    display: flex !important;
  }
`;

const Links = styled.div`
  font-size: 0.8rem;
  box-shadow: -2px 1px 5px 1px rgba(58,58,58,0.5);
  /* -webkit-box-shadow: -2px 1px 5px 1px rgba(58,58,58,1);
  -moz-box-shadow: -2px 1px 5px 1px rgba(58,58,58,1); */
  position: absolute;
  top: 3rem;
  right: 0.25rem;
  z-index: 5;
  width: 100px;
  background: whitesmoke;
  .mobile-item {
    padding: 0.5rem;
  }
`;

const NavContainer = styled.nav`
  height: 60px;
  position: relative;
  @media(max-width: 625px) {
    ${RightContent}, ${MidContent} {
      display: none;
    }
  }
`;


const Navbar = ({ bag }) => {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let init = 0;
    bag.forEach(item => {
      init += item.added
    });
    setCount(init);
  }, [bag, count]);

  return (
    <NavContainer>
      <Wrapper>
        <LeftContent>
          <Link to="/">
            <Logo>The Shop</Logo>
          </Link>
        </LeftContent>
        <MidContent>
          <SearchComponent>
            <Input type="text" placeholder='Search...' />
            <Search className='search-icon' />
          </SearchComponent>
        </MidContent>
        <RightContent>
          <Link to="/shop/checkout">
            <LinkItem style={{ margin: '0 0.75rem' }}>
              <Badge badgeContent={count} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </LinkItem>
          </Link>
          {/* <Language className='menu'>EN</Language> */}
          <Link to='/shop/auth'><LinkItem className='menu'>Login</LinkItem></Link>
          <Link to='/shop/register'><LinkItem className='menu'>Register</LinkItem></Link>
        </RightContent>
        <MobileMenu>
          <Link to="/shop/checkout">
            <LinkItem style={{ margin: '0 0.75rem' }}>
              <Badge badgeContent={count} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </LinkItem>
          </Link>
          <LinkItem className='mobile-item' style={{ marginLeft: 10 }} onClick={() => setOpen(!open)}>
            <MenuOpen className='mobile-item' />
          </LinkItem>
          <Links style={{ display: `${open ? "block" : "none"}` }} id="links">
            <LinkItem className='mobile-item'>Lang: EN</LinkItem>
            <Link to ='/'><LinkItem className='mobile-item'>Favorites</LinkItem></Link>
            <Link to='/shop/auth'><LinkItem className='mobile-item'>Login</LinkItem></Link>
            <Link to='/shop/register'><LinkItem className='mobile-item'>Register</LinkItem></Link>
          </Links>
        </MobileMenu>
      </Wrapper>
    </NavContainer>
  );
};

const mapStateToProps = state => {
  return {
    bag: state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar);

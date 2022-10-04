import React from 'react';
import styled from 'styled-components';
import { ShoppingCart, Menu, Search } from 'react-feather';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

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

const MidContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  position: fixed;
  width: 100%;
  background: #f5f5f5;
  z-index: 10;
  top: 0;
`;


const Navbar = ({ bag, search }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let init = 0;
    bag.forEach(item => {
      init += Number(item.added);
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
        <RightContent>
          <Link to="/cart">
            <LinkItem style={{ margin: '0 0.75rem' }}>
              <Badge badgeContent={Number(count)} color="secondary">
                <ShoppingCart />
              </Badge>
            </LinkItem>
          </Link>
          {/* <Language className='menu'>EN</Language> */}
          {/* <Link to='/shop/auth'><LinkItem className='menu'>Login</LinkItem></Link>
          <Link to='/shop/register'><LinkItem className='menu'>Register</LinkItem></Link> */}
        </RightContent>
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

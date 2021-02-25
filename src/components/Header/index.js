import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <Container>
            <Logo>
                <Link to={'/'}>logo</Link>
            </Logo>
            <Nav>
                <NavItem>
                    <Link to={'/'}>home</Link>
                </NavItem>
                <NavItem>
                    <Link to={'/search'}>search</Link>
                </NavItem>
            </Nav>
        </Container>
    )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Logo = styled.div`
  a {
    text-transform:uppercase;
    color:#333;
  }
`;

const Nav = styled.nav`
  display: flex;
  
`;

const NavItem = styled.div`
    a {
      height: 70px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      color:#333;
    }
`;



export default Header;
import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import SearchBox from "../SearchBox";
import {IconLogo} from "../../icons";

const Header = () => {

    return (
        <Container>
            <Logo>
                <Link to={'/'}>
                    <IconLogo/>
                </Link>
            </Logo>
            <SearchBox shape={"round"}/>
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
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.div`
  margin-right: 20px;
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
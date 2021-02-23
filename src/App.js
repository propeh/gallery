import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style:none;
    box-sizing: border-box;
    text-decoration:none;
  }
`
const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Switch>
               <Route exact path={'/'} component={Home} />
               <Route path={'/search'} component={Search}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;
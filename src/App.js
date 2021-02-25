import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {GlobalStyle} from "./components/styled/Reset.Styled";


const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Switch>
               <Route exact path={'/'} component={Home} />
               <Route path={'/search/:category/:query'} component={Search}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;
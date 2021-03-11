import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from "./pages/Home";
import Search from "./pages/Search";
import {GlobalStyle} from "./components/styled/Reset.Styled";
import HeaderContainer from "./containers/HeaderContainer";
import Topics from "./pages/Topics";


const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <HeaderContainer/>
            <Switch>
               <Route exact path={'/'} component={Home} />
               <Route path={'/search/:category/:query'} component={Search}/>
               <Route path={'/topics/:slug'} component={Topics}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;

export default App;
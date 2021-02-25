import React from 'react';
import styled from 'styled-components';
import SearchPhotosContainer from "../containers/SearchPhotosContainer";

const Search = (props) => {

    return (
        <Container>
            <SearchPhotosContainer {...props}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default Search;
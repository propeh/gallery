import React from 'react';
import styled from 'styled-components';
import PhotoListContainer from "../containers/PhotoListContainer";
import Visual from "../components/Home/Visual";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const Home = () => {

    return (
        <Container>
            <Visual/>
            <ContentContainer>
                <PhotoListContainer/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

export default Home;
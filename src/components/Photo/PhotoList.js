import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./PhotoCard";

const PhotoList = ({data}) => {

    return (
        <Container>
            {
                data.map((item, index) => <PhotoCard key={index} {...item}/>)
            }
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoList;
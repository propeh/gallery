import React from 'react';
import styled from 'styled-components';

const PhotoCard = ({urls}) => {

    return (
        <Container>
            <img src={urls.regular} alt=""/>
        </Container>
    )
}

const Container = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default PhotoCard;
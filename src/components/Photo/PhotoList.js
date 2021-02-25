import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./PhotoCard";
import {ContentContainer} from "../Layout/Layout.Styled";

const PhotoList = ({data, resultTitle}) => {

    return (
        <Container>
            <ContentContainer>
                <h1>{resultTitle}</h1>
                <Row>
                    {
                        data.map((item, index) => (
                            <Col key={index}>
                                <PhotoCard {...item}/>
                            </Col>
                        ))
                    }
                </Row>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`
h1 {
  font-size: 46px;
  text-transform: capitalize;
}
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -12px;
`;

const Col = styled.div`
    width: 33.333%;
  padding: 12px;
`;

export default PhotoList;
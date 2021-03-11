import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import PhotoItemSkeleton from "./PhotoItemSkeleton";

const PhotoListSkeleton = () => {

    const numbers = _.range(30)

    return (
        <Container>
                <Row>
                    {
                        numbers.map((num, i) => (
                            <Col key={i}>
                                <PhotoItemSkeleton/>
                            </Col>
                        ))
                    }
                </Row>
        </Container>
    )
}

const Container = styled.div`

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


export default PhotoListSkeleton;
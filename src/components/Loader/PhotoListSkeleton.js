import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import PhotoItemSkeleton from "./PhotoItemSkeleton";
import {ContentContainer} from "../Layout/Layout.Styled";

const PhotoListSkeleton = () => {

    const numbers = _.range(30)

    return (
        <Container>
            <ContentContainer>
                <Row>
                    {
                        numbers.map((num) => (
                            <Col>
                                <PhotoItemSkeleton/>
                            </Col>
                        ))
                    }
                </Row>
            </ContentContainer>

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
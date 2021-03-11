import React from 'react';
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";

const PhotoItemSkeleton = () => {

    return (
        <Container>
            <Thumb/>
        </Container>
    )
}

const Container = styled.div`
    
`;

const Thumb = styled(Skeleton)`
    width: 100%;
    height: 280px;
`;

export default PhotoItemSkeleton;
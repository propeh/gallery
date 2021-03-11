import React from 'react';
import styled from 'styled-components';

const List = ({data, renderItem}) => {

    return (
        <Container>
            {
                data.map((item) => renderItem(item))
            }
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

const Com = styled.div`
    
`;

export default List;
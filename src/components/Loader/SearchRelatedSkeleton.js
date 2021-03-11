import React from 'react';
import styled from 'styled-components';
import Skeleton from "react-loading-skeleton";
import _ from "lodash";

const SearchRelatedSkeleton = () => {

    const numbers = _.range(20)

    return (
        <Container>
            {
                numbers.map((item) => <Keyword key={item}/> )
            }
        </Container>
    )
}


const Container = styled.div`
  display: flex;
  overflow: auto;
  margin-left: -4px;
  margin-right: -4px;
  > span {
    padding: 0 4px;
  }
`;

const Keyword = styled(Skeleton)`
  min-width: 135px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color:#767676;
  border-radius: 4px;
  white-space: nowrap;
  padding: 0 15px;
  flex-shrink: 0;
  
`;

export default SearchRelatedSkeleton;
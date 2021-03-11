import React from 'react';
import styled from 'styled-components';
import SearchRelatedSkeleton from "../Loader/SearchRelatedSkeleton";
import ScrollMenu from "../ScrollMenu/ScrollMenu";
import {useHistory} from "react-router-dom";



const RelatedSearchs = ({data = []}) => {

    const history = useHistory();

    const renderMenu = (item, index) => {
        return (
            <Keyword key={index}
                     onClick={() => history.push(`/search/photos/${item.title}`)}
            >{item.title}</Keyword>
        )
    }

    if (data.length === 0) return <SearchRelatedSkeleton/>

    return (
        <Container>
            <ScrollMenu data={data}
                        renderMenu={renderMenu}

            />
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

const Keyword = styled.div`
  min-width: 135px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: #767676;
  border-radius: 4px;
  border: 1px solid #bbb;
  margin: 0 4px;
  white-space: nowrap;
  padding: 0 15px;
  flex-shrink: 0;
  cursor: pointer;
`;

export default RelatedSearchs;
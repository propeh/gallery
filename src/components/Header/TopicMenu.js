import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import ScrollMenu from "../ScrollMenu/ScrollMenu";

const TopicMenu = ({data = []}) => {

    const history = useHistory();
    const renderMenu = (item, index) => {
        return (
            <TopicTitle key={index}
                        onClick={() => history.push(`/topics/${item.slug}`)}
            >{item.title}</TopicTitle>
        )
    }

    if(data.length === 0) return null;
    
    return (
        <Container>
            <ScrollMenu data={data}
                        renderMenu={renderMenu}

            />
        </Container>
    )
}

const Container = styled.div`

`;

const TopicTitle = styled.div`
    white-space: nowrap;
  font-size: 14px;
  color:#767676;
  margin: 0 10px;
  padding: 0 5px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
`;

export default TopicMenu;
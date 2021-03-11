import React from 'react';
import styled from 'styled-components';
import PhotoCard from "./PhotoCard";
import PhotoListSkeleton from "../Loader/PhotoListSkeleton";

const PhotoList = ({data = []}) => {

    const setGroups = (data) => {
        const groups = [[], [], []];
        const groupsHeight = [0, 0, 0];

        for(let i=0; i<data.length; i++) {
            const width = data[i].width;
            const height = data[i].height;
            const ratioHeight = height / width;

            const minGroupsHeight = Math.min(...groupsHeight);
            const minHeightIndex = groupsHeight.indexOf(minGroupsHeight);

            groups[minHeightIndex].push(data[i]);
            groupsHeight[minHeightIndex] = groupsHeight[minHeightIndex] + ratioHeight;
        }

        return groups;
    }

    const groups = setGroups(data);

    if(data.length === 0) return <PhotoListSkeleton/>

    return (
        <Container>
            <Groups>
                {
                    groups.map((group, groupIndex) => (
                        <Group key={groupIndex}>
                            {
                                group.map((item, i) => (
                                    <Col key={i}>
                                        <PhotoCard {...item}/>
                                    </Col>
                                ))
                            }
                        </Group>
                    ))
                }
            </Groups>
        </Container>
    )
}

const Container = styled.div`

`;

const Groups = styled.div`
  display:flex;
  margin-left: -12px;
  margin-right: -12px;
  
`;

const Group = styled.div`
  width: 33.3333%;
  padding: 12px;
`;

const Col = styled.div`
  padding: 12px 0;
`;

export default PhotoList;


import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";
import {CLIENT_ID} from "../constants";
import PhotoList from "../components/Photo/PhotoList";
import RelatedSearchs from "../components/Search/RelatedSearchs";
import {ContentContainer} from "../components/Layout/Layout.Styled";

const SearchPhotosContainer = ({match}) => {

    const dispatch = useDispatch();

    const query = match.params.query;
    const category = match.params.category;

    const {searchResults} = useSelector(state => state);

    useEffect(() => {
        searchPhotos()
    }, [query])

    const searchPhotos = () => {
        dispatch(Action.Creators.searchPhotos({
            client_id: CLIENT_ID,
            per_page: 30,
            query,
        }))
    }

    return (
        <Container>
            <ContentContainer>
                <Title>{query}</Title>
                <RelatedSearchs data={searchResults?.related_searches}/>

                {
                    category === 'photos' &&
                    <PhotoList data={searchResults?.photos?.results}/>

                }
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.h1`
 font-size: 54px;
`;

export default SearchPhotosContainer;
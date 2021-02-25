import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";
import {CLIENT_ID} from "../Constants/Consts";
import PhotoList from "../components/Photo/PhotoList";

const SearchPhotosContainer = ({match}) => {

    const dispatch = useDispatch();

    const query = match.params.query;

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
            <PhotoList data={searchResults.results} resultTitle={query}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default SearchPhotosContainer;
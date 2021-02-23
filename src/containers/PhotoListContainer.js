import React, {useEffect} from 'react';
import styled from 'styled-components';
import PhotoList from "../components/Photo/PhotoList";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";

const PhotoListContainer = () => {

    const {photos} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        getPhotos()
    }, [])

    const getPhotos = () => {
        dispatch(Action.Creators.getPhotos({
            client_id: process.env.REACT_APP_CLIENT_ID,
            page: 2,
            per_page: 30
        }))
    }


    return (
        <Container>
            <PhotoList data={photos}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default PhotoListContainer;
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {Action} from "../redux/reducer";
import {useDispatch} from "react-redux";
import {CLIENT_ID} from "../constants";

const Topics = ({match}) => {

    const slug = match.params.slug;
    const dispatch = useDispatch();

    useEffect(() => {
        getTopicBySlug()
    }, [slug])

    const getTopicBySlug = () => {
        dispatch(Action.Creators.getTopicBySlug({
            slug,
            client_id: CLIENT_ID
        }))
    }

    return (
        <Container>
            <h1>{slug}</h1>
        </Container>
    )
}

const Container = styled.div`

`;

export default Topics;
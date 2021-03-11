import React, {useEffect} from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import TopicMenu from "../components/Header/TopicMenu";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../redux/reducer";
import {CLIENT_ID} from "../constants";

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const {topics} = useSelector(state => state)

    useEffect(() => {
        getTopics();
    }, [])

    const getTopics = () => {
        dispatch(Action.Creators.getTopics({
            client_id: CLIENT_ID,
            per_page: 30
        }))
    }

    return (
        <Container>
            <Header/>
            <TopicMenu data={topics}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default HeaderContainer;
import React from 'react';
import styled from 'styled-components';
import SearchBox from "../SearchBox";

const Visual = () => {

    return (
        <Container>
            <Contents>
                <h1>
                    Unsplash
                </h1>
                <p>
                    The internet’s source of freely-usable images. <br/>
                    Powered by creators everywhere.
                </p>
                <SearchBox shape={"square"}/>
            </Contents>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  margin-bottom: 40px;
  background: url("https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80") 50% / cover no-repeat;
`;

const Contents = styled.div`
  max-width: 864px;
  width: 100%;
  h1 {
    font-size: 54px;
    font-weight: bold;
    margin-bottom: 5px;
    color:#fff;
  }
  p {
   font-size: 20px;
    line-height: 1.6;
    color:#fff;
    margin-bottom: 30px;
  }
`;

export default Visual;
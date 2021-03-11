import React, {useRef, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import SearchRelatedSkeleton from "../Loader/SearchRelatedSkeleton";
import {IconChevronLeft, IconChevronRight} from "../../icons";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ScollMenu = ({data = [], renderMenu}) => {

    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScroll, setMaxScroll] = useState(1);
    const rowRef = useRef(null);

    const onScroll = (e) => {
        const clientWidth = e.target.clientWidth;
        const scrollWidth = e.target.scrollWidth;
        const scrollLeft = e.target.scrollLeft;

        setScrollLeft(scrollLeft);
        setMaxScroll(scrollWidth - clientWidth);
    }

    const onClickLeft = () => {
        rowRef.current.scrollLeft = Math.max(rowRef.current.scrollLeft - 250, 0);
    }

    const onClickRight = () => {
        rowRef.current.scrollLeft = Math.min(rowRef.current.scrollLeft + 250, maxScroll);
    }


    return (
        <Container>
            <Row ref={rowRef} onScroll={onScroll}>
                {
                    data.map((item, index) => renderMenu(item, index))
                }
            </Row>

            {
                scrollLeft > 0 &&
                <ButtonLeft onClick={onClickLeft}>
                    <IconChevronLeft/>
                </ButtonLeft>
            }

            {
                scrollLeft < maxScroll &&
                <ButtonRight onClick={onClickRight}>
                    <IconChevronRight/>
                </ButtonRight>
            }
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const Row = styled.div`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
`;



const Button = styled.div`
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${fadeIn} 0.4s;

  svg {
    position: relative;
    width: 22px;
    height: 22px;
    fill: #111;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    pointer-events: none;
  }
`;
const ButtonLeft = styled(Button)`
  left: 0;
  &::before {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
  }
`;

const ButtonRight = styled(Button)`
  right: 0;
  &::before {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 95%, #fff);
  }

`;
export default ScollMenu;
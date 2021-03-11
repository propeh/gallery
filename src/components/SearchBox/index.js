import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import cn from 'classnames';
import {IconSearch} from "../../icons";
import {ContentContainer} from "../Layout/Layout.Styled";

const SearchBox = ({shape}) => {

    const [value, setValue] = useState('')
    const history = useHistory();

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/photos/${value}`)
    }

    return (
        <Container className={cn("SearchBox", shape)}>
                <Form onSubmit={onSubmit}>
                    <Label>
                        <Button>
                            <IconSearch/>
                        </Button>
                        <Input type="text"
                               onChange={onChange}
                               value={value}
                               placeholder={"search..."}
                        />
                    </Label>
                </Form>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex: 1;
  position: relative;

  .round & {
    height: 38px;
    border-radius: 19px;
    background: #eee;
  }

  .square & {
    height: 54px;
    border-radius: 4px;
    background: #fff;
  }
`;

const Button = styled.button`
  background: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 24px;
  color: #767676;

  .round & {
    svg {
      width: 20px;
    }
  }

  .square & {
    svg {
      width: 24px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  display: block;
  padding-left: 40px;
  font-size: 16px;
  border: 0;
  background: none;
  color: #767676;
`;

export default SearchBox;
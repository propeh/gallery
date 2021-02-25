import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {HiOutlineSearch} from "react-icons/hi";

const SearchBox = () => {

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
        <Container>
            <Form onSubmit={onSubmit}>
                <Label>
                    <Button>
                        <HiOutlineSearch/>
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
  max-width: 800px;
  margin: 30px auto;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Label = styled.label`
    height: 50px;
  width: 800px;
  display: flex;
  flex: 1;
  position: relative;
  border-radius: 4px;
  background:#fff;
`;

const Button = styled.button`
background:none;
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 24px;
  color:#767676;
`;

const Input = styled.input`
    width: 100%;
  height: 100%;
  display: block;
  padding-left: 40px;
  font-size: 16px;
  border: 0;
  background:none;
  color:#767676;
`;

export default SearchBox;
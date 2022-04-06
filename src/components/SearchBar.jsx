import React from 'react';
import styled from "styled-components";

const SearchBar = () => {
  return (
    <Container>
      <SearchInput type="text" placeholder="Repository명을 입력해주세요 :)" />
      <SearchBtn>검색</SearchBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
`
const SearchInput = styled.input`
  width: calc(100% - 70px);
  height: 40px;
  padding-left: 15px;
  border-radius: 5px;
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  box-sizing: border-box;
  margin-right: 10px;
  ::placeholder {
    color: #C8C6C6;
  }
`
const SearchBtn = styled.button`
  width: 60px;
  height: 100%;
  font-size: 15px;
  font-weight: 700;
  border: 0px;
  background-color: #FF8080;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
  cursor: pointer;
`

export default SearchBar;
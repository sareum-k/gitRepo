import React from 'react';
import styled from "styled-components";
import SearchBar from './SearchBar';
import SearchPost from './SearchPost';

const Search = () => {
  return (
    <Container>
      <SearchBar />
      <SearchPost />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
  background: #FDF6F0;
  padding: 30px 50px;
  box-sizing: border-box;
`;

export default Search;
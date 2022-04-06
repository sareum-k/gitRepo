import React, { useState } from 'react';
import styled from "styled-components";
import SearchBar from './SearchBar';
import SearchPost from './SearchPost';

const Search = () => {
  const [searchData, setSearchData] = useState([]); // 검색 데이터 저장
  console.log(searchData)

  return (
    <Container>
      <SearchBar setData={setSearchData} />
      {searchData.map((item, idx) => (
        <SearchPost
          key={idx}
          url={item.html_url}
          title={item.name}
          description={item.description}
          avatar={item.owner.avatar_url}
          updated={item.updated_at}
          button="등록"
        />
      ))}
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
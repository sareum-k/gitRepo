import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import SearchBar from './SearchBar';
import SearchPost from './SearchPost';
import { likedRepoState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

const Search = () => {
  const storageData = JSON.parse(localStorage.getItem("likedData"));
  const [searchData, setSearchData] = useState([]); // 검색 데이터 저장
  const [likedData, setLikedData] = useRecoilState(likedRepoState);
  console.log(searchData)

  const likeRepo = async (repo) => {
    const storageData = await JSON.parse(localStorage.getItem("likedData"));
    console.log(storageData)

    if (storageData.length === 4) {
      alert("Repository는 최대 4개까지 등록할 수 있습니다.");
    } else {
      const exist = storageData.find(
        (repoName) =>
          repoName.name === repo.name && repoName.login === repo.login
      );
      if (exist) {
        alert("이미 등록한 Repository입니다.");
      } else {
        setLikedData([...likedData, repo]);
      }
    }
  };

  useEffect(() => {
    if (storageData) setLikedData(storageData);
  }, []);

  useEffect(() => {
    localStorage.setItem("likedData", JSON.stringify(likedData));
  }, [likedData]);

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
          onClick={() =>
            likeRepo({
              name: item.name,
              login: item.owner.login,
              description: item.description,
              updated: item.updated_at,
              avatar: item.owner.avatar_url,
            })
          }
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
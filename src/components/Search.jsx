import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import SearchBar from './SearchBar';
import SearchPost from './SearchPost';
import { likedRepoState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import Pagination from './Pagination';
import Loading from './Loading';

const Search = () => {
  const storageData = JSON.parse(localStorage.getItem("likedData"));
  const [searchData, setSearchData] = useState([]); // 검색 데이터 저장
  const [likedData, setLikedData] = useRecoilState(likedRepoState);
  const [isLoaded, setIsLoaded] = useState(null);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
      <SearchBar setData={setSearchData} setIsLoaded={setIsLoaded} />
      {isLoaded !== null &&
        (isLoaded ? (
          <>
            {searchData.slice(offset, offset + limit).map((item, idx) => (
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
            {searchData.length === 0 ? (<Empty>검색결과가 없습니다.</Empty>) : (
              <Pagination
                total={searchData.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            )}
          </>
        ) : (<Loading />))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  background: #FDF6F0;
  padding: 30px 50px 0px 50px;
  box-sizing: border-box;
`;

const Empty = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #FF8080;
  display: flex;
  justify-content: center;
  height: calc(100vh - 250px);
  align-items: center;
`

export default Search;
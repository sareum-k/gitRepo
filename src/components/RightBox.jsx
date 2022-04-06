import React, { useEffect } from 'react';
import styled from "styled-components";
import RepositoryPost from './RepositoryPost';
import { likedRepoState } from "../recoil/atoms";
import { useRecoilState } from "recoil";

const RightBox = () => {
  const [likedData, setLikedData] = useRecoilState(likedRepoState);

  const remove = (name, login) => {
    const storageData = JSON.parse(localStorage.getItem("likedData"));
    const deletedArr = storageData.filter((item) => item.name !== name || item.login !== login);
    setLikedData(deletedArr);
  };

  useEffect(() => {
    localStorage.setItem('likedData', JSON.stringify(likedData));
  }, [likedData]);
  return (
    <Section>
      <Header>Bookmark</Header>
      {likedData.length === 0 ? (<Empty>Repository를 추가해주세요!</Empty>) : (
        <>
          {
            likedData.map((item, idx) => (
              <RepositoryPost
                key={idx}
                button="삭제"
                title={item.name}
                description={item.description}
                avatar={item.avatar}
                onClick={() => remove(item.name, item.login)}
              />
            ))
          }
        </>
      )}
    </Section>
  );
}

const Section = styled.section`
  width: 30%;
  height: 100vh;
  border-left: 1px solid #FF8080;
`
const Header = styled.header`
  padding: 28px 0px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: #757575;
`
const Empty = styled.p`
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #757575;
`

export default RightBox;
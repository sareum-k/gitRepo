import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { likedRepoState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import axios from "axios";
import IssuePost from './IssuePost';

const Issue = () => {
  const [likedData, setLikedData] = useRecoilState(likedRepoState);
  const [issues, setIssues] = useState([]);

  const searchIssues = async (login, name) => {
    const url = `https://api.github.com/repos/${login}/${name}/issues`;
    return axios
      .get(url)
      .then((res) => {
        setIssues((body) => (body ? [...body, ...res.data] : [res.data]));
        // const data = Object.assign({}, issues, likedData);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    likedData.map((value) => searchIssues(value.login, value.name));
  }, [likedData]);

  return (
    <Container>
      {issues.map((item, idx) => (
        <IssuePost
          key={idx}
          url={item.html_url}
          description={item.repository_url.slice(29)}
          title={item.title}
          avatar={item.user.avatar_url}
          updated={item.updated_at}
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
  padding: 20px 50px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Issue;
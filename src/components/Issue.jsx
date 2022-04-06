import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { likedRepoState } from "../recoil/atoms";
import { useRecoilState } from "recoil";
import axios from "axios";
import IssuePost from './IssuePost';
import Pagination from './Pagination';

const Issue = () => {
  const [likedData, setLikedData] = useRecoilState(likedRepoState);
  const [issues, setIssues] = useState([]);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const searchIssues = async (login, name) => {
    const url = `https://api.github.com/repos/${login}/${name}/issues`;
    return axios
      .get(url)
      .then((res) => {
        setIssues((body) => (body ? [...body, ...res.data] : [res.data]));
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    likedData.map((value) => searchIssues(value.login, value.name));
  }, [likedData]);

  return (
    <Container>
      <Box>
        {issues.slice(offset, offset + limit).map((item, idx) => (
          <IssuePost
            key={idx}
            url={item.html_url}
            description={item.repository_url.slice(29)}
            title={item.title}
            avatar={item.user.avatar_url}
            updated={item.updated_at}
          />
        ))}
      </Box>
      {issues.length === 0 ? (
        <Empty>Issue가 없습니다.</Empty>
      ) : (
        <Pagination
          total={issues.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  background: #FDF6F0;
  padding: 20px 50px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Empty = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #FF8080;
  display: flex;
  align-items: center;
`

export default Issue;
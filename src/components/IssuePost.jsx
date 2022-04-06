import React from 'react';
import styled from "styled-components";

const IssuePost = ({
  url,
  avatar = "https://avatars.githubusercontent.com/u/15073430?v=4",
  title = "Title",
  description,
  updated,
}) => {
  return (
    <Box>
      <div className="box-avatar">
        <img
          src={avatar}
          alt="avatar"
        />
      </div>
      <a href={url} target="_blank" rel="noreferrer">
        <div className="box-content">
          <div className="box-title">{title}</div>
          {description !== undefined ? (
            <div className="box-sub">{description}</div>
          ) : null}
          {updated !== undefined ? (
            <div className="box-sub">업데이트 {updated.split('T')[0]}</div>
          ) : null}
        </div>
      </a>
    </Box >
  );
}

const Box = styled.div`
  display: flex;
  box-shadow: 0 3px 4px 1px rgb(32 33 36 / 20%);
  width: 330px;
  height: 180px;
  border-radius: 5px;
  padding: 40px 30px;
  margin-top: 20px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
  box-sizing: border-box;
  margin-left: 20px;
  :hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
  img {
    width: 60px;
    border-radius: 100px;
  }
  .box-content {
    margin-left: 20px;
  }
  .box-title {
    width: 200px;
    height: 50px;
    font-weight: 900;
    font-size: 20px;
    color: #FF8080;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }
  .box-sub {
    font-size: small;
    color: #757575;
    opacity: 0.6;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

export default IssuePost;
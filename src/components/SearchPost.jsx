import React from 'react';
import styled from "styled-components";

const SearchPost = ({
  url,
  avatar = "https://avatars.githubusercontent.com/u/15073430?v=4",
  title = "Title",
  description,
  updated,
  onClick,
  button
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
        <div>
          <div className="box-title">{title}</div>
          {description !== undefined ? (
            <div className="box-sub">{description}</div>
          ) : null}
          {updated !== undefined ? (
            <div className="box-sub">{updated}</div>
          ) : null}
        </div>
      </a>

      {
        button !== undefined ? (
          <div className="box-button">
            <button onClick={onClick}>{button}</button>
          </div>
        ) : null
      }
    </Box >
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 3px 4px 1px rgb(32 33 36 / 20%);
  width: calc(100% - 30px);
  border-radius: 5px;
  padding: 15px;
  margin-top: 25px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
  img {
    width: 50px;
    border-radius: 100px;
  }
  div {
    margin: 0 12px;
  }
  button {
    border: 0px;
    background-color: #FF8080;
    border-radius: 3px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    color: #fff;
    width: 50px;
    height: 30px;
    font-weight: 700;
    cursor: pointer;
  }
  .box-title {
    font-weight: 900;
    font-size: 20px;
    color: #FF8080;
  }
  .box-sub {
    font-size: small;
    color: #757575;
    opacity: 0.6;
  }
  .box-button {
    margin-left: auto;
    cursor: pointer;
  }
`;

export default SearchPost;
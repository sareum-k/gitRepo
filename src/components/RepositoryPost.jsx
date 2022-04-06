import React from 'react';
import styled from "styled-components";

const RepositoryPost = () => {
  return (
    <Box>
      <div className="box-avatar">
        <img
          style={{ borderRadius: 100 }}
          width={50}
          // src={avatar}
          alt="avatar"
        />
      </div>
      {/* <a href={url} target="_blank" rel="noreferrer"> */}
      <div>
        <div className="box-title">title</div>
        {/* {description !== undefined ? ( */}
        <div className="box-sub">description</div>
        {/* // ) : null} */}
        {/* {updated !== undefined ? ( */}
        <div className="box-sub">updated</div>
        {/* ) : null} */}
      </div>
      {/* </a> */}

      {/* {
        button !== undefined ? ( */}
      <div className="box-button">
        <button>삭제</button>
        {/* <button onClick={onClick}>{button}</button> */}
      </div>
      {/* ) : null
      } */}
    </Box >
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;
  background-color: #EEEEEE;
  /* border-bottom: 1px solid #FF8080; */
  :hover {
    background-color: #FFECEC;
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

export default RepositoryPost;
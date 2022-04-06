import React from 'react';
import styled from "styled-components";
import RepositoryPost from './RepositoryPost';

const RightBox = () => {
  return (
    <Section>
      <Header>Public Repository</Header>
      <RepositoryPost />
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

export default RightBox;
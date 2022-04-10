import React, { useState } from "react";
import styled from "styled-components";
import Issue from "./Issue";
import Search from "./Search";
import Header from "./Header";

const LeftBox = () => {
  const [currentTab, setCurrntTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrntTab(index);
  };

  const tabArray = [
    {
      menu: "Search",
      content: <Search />,
    },
    {
      menu: "Issue",
      content: <Issue />,
    },
  ];
  return (
    <Section>
      <Header />
      <TabContainer>
        {tabArray.map((el, idx) => (
          <Tab
            key={idx}
            onClick={() => selectMenuHandler(idx)}
            className={idx === currentTab ? "submenu focused" : "submenu"}
          >
            {el.menu}
          </Tab>
        ))}
      </TabContainer>
      <Content>{tabArray[currentTab].content}</Content>
    </Section>
  );
};

const Section = styled.section`
  width: 70%;
  height: calc(100vh - 100px); ;
`;
const TabContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 50px;
  list-style: none;
  .submenu {
    width: 100%;
    border: 1px solid #ff8080;
    color: #ff8080;
  }
  .focused {
    background-color: #ff8080;
    color: #fff;
  }
`;
const Tab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  width: 50%;
  cursor: pointer;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export default LeftBox;

import styled from "styled-components";

const Header = () => {
  return <HeaderBox>Github</HeaderBox>;
};

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 36px;
  font-weight: bold;
  color: #757575;
`;

export default Header;

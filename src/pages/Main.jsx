import styled from "styled-components";
import LeftBox from "../components/LeftBox";
import RightBox from "../components/RightBox";

const Main = () => {
  return (
    <Container>
      <LeftBox />
      <RightBox />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Main;

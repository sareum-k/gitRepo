import styled from 'styled-components';
import SkeletonItem from "./SkeletonItem"

const SkeletonIssue = () => {
  return (
    <Box>
      <SkeletonItem className="img"></SkeletonItem>
      <div>
        <SkeletonItem className="box-title"></SkeletonItem>
        <SkeletonItem className="box-sub"></SkeletonItem>
        <SkeletonItem className="box-sub"></SkeletonItem>
      </div>
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
  margin-top: 30px;
  background: #fff;
  box-sizing: border-box;
  margin-left: 20px;
  div{
    margin-right: 5px;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background-color: #EEEEEE;
  }
  .box-title {
    width: 200px;
    height: 50px;
    margin-bottom: 10px;
    background-color: #EEEEEE;
  }
  .box-sub {
    width: 200px;
    height: 20px;
    margin-top: 10px;
    background-color: #EEEEEE;
  }
`;



export default SkeletonIssue;
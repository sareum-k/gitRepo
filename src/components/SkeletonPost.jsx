import styled from 'styled-components';
import SkeletonItem from "./SkeletonItem"

const SkeletonPost = () => {
  return (
    <Box>
      <SkeletonItem className="img"></SkeletonItem>
      <div>
        <SkeletonItem className="box-title"></SkeletonItem>
        <SkeletonItem className="box-sub"></SkeletonItem>
        <SkeletonItem className="box-sub"></SkeletonItem>
      </div>
      <SkeletonItem className="box-button">
      </SkeletonItem>
    </Box >
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 30px);
  height: 90px;
  border-radius: 5px;
  padding: 10px;
  margin-top: 25px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0 3px 4px 1px rgb(32 33 36 / 20%);
  .img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: #EEEEEE;
  }
  div {
    margin: 0 12px;
  }
  .box-title {
    width: 200px;
    height: 15px;
    background-color: #EEEEEE;
  }
  .box-sub {
    height: 10px;
    width: 300px;
    margin-top: 5px;
    background-color: #EEEEEE;
    box-sizing: border-box;
  }
  .box-button {
    margin-left: auto;
    border: 0px;
    background-color: #EEEEEE;
    border-radius: 3px;
    width: 50px;
    height: 30px;
  }
`;



export default SkeletonPost;
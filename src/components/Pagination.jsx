import { useState } from "react";
import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit); // (전체 개수 / 한 페이지에 나타낼 데이터 수), 총 페이지 수
  const [start, setStart] = useState(1); // 페이지 리스트를 5개씩 바꾸기 위한 state

  const prev = () => {
    if (page === start && page !== 1) {
      setStart((prev) => prev - 5); // 5개의 리스트가 끝나면 숫자를 어디서부터 다시 보이게 할지
    }
    setPage(page - 1);
  };

  const next = () => {
    if (page === start + 4 && page !== numPages) {
      setStart((prev) => prev + 5); // 5개의 리스트가 끝나면 숫자를 어디서부터 다시 보이게 할지
    }
    setPage(page + 1);
  };

  return (
    <>
      <Nav>
        <Button onClick={prev} disabled={page === 1}>
          &lt;
        </Button>
        {Array(Math.ceil(total / limit) < 5 ? Math.ceil(total / limit) : 5)
          .fill()
          .map((_, i) => (
            <Button
              key={i + start} // index가 0부터 시작하기 때문에 
              onClick={() => setPage(i + start)} // 페이지 번호를 클릭했을 경우
              className={page === i + start ? "page" : null}
            >
              {i + start}
            </Button>
          ))}
        <Button onClick={next} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 40px;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
`;

const Button = styled.button`
  border: none;
  width: 25px;
  height: 30px;
  border-radius: 5px;
  padding: 2px;
  margin: 0;
  background: #ff8080;
  border: 1px solid #ff8080;
  color: white;
  font-size: 1rem;
  box-sizing: border-box;
  &:hover {
    background: #ffffff;
    color: #ff8080;
    border: 1px solid #ff8080;
    cursor: pointer;
    font-weight: bold;
  }
  &.page { // 현재 클릭한 페이지를 구분하기 위한 적용
    background: #ffffff;
    font-weight: bold;
    cursor: revert;
    transform: revert;
    color: #ff8080;
    border: 1px solid#FF8080;
  }
`;

export default Pagination;

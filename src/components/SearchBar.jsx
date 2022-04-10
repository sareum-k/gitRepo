import React, { useState, useCallback, useEffect, useMemo } from 'react';
import styled from "styled-components";
import axios from "axios";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setData, setIsLoaded }) => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");

  const delaySetValue = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 500),
    []);

  const getSearchData = async () => {
    setIsLoaded(false);

    const url = `https://api.github.com/search/repositories?q=${search}&per_page=100`;
    await axios.get(url).then((data) => {
      setData(data.data.items);
    })
      .catch((err) => alert(err));

    setIsLoaded(true);
  };

  const searchData = () => {
    if (input === "") {
      alert("Repository 제목을 입력해주세요.");
      return;
    }
    getSearchData();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    delaySetValue(e.target.value)
  }

  useEffect(() => {
    if (search !== '') {
      getSearchData()
    }
  }, [search])

  return (
    <Container>
      <InputBox>
        <FaSearch />
        <SearchInput
          type="text"
          placeholder="Repository명을 입력해주세요 :)"
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && searchData()}
          value={input}
        />
      </InputBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-end;
  padding-right: 20px;
  box-sizing: border-box;
`
const InputBox = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;

  svg{
    color: #757575;
  }
  display: flex;
  align-items: center;
  svg{
    color: #757575;
  }
`
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-left: 5px;
  box-sizing: border-box;
  ::placeholder {
    color: #C8C6C6;
  }
`

export default React.memo(SearchBar);
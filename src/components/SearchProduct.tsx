import { useState } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function Search(props: any) {
  const [productQuery, setProductQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    const uri =
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1078733059924735380&keyword=" +
      productQuery;
    e.preventDefault();
    const gotProducts = createAsyncThunk(
      "products/getProducts",
      async (dispatch, getState) => {
        return await fetch(uri).then((res) => res.json());
      }
    );
    dispatch(gotProducts());
  };

  const handleClear = (e: any) => {
    const uri = "";
    e.preventDefault();
    const clearProducts = createAsyncThunk(
      "products/getProducts",
      async (dispatch, getState) => {
        return await fetch(uri).then((res) => res.status);
      }
    );
    dispatch(clearProducts());
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label>
            <Input
              placeholder="商品名を入力してください"
              type="text"
              value={productQuery}
              onChange={(e) => setProductQuery(e.target.value)}
              required
            />
          </label>
          <Button type="submit" value="検索" />
          <Button
            type="reset"
            value="クリア"
            onClick={() => {
              setProductQuery("");
            }}
          />
        </Form>
        <Clear type="reset" value="検索結果クリア" onClick={handleClear} />
      </Container>
    </>
  );
}

const Container = styled.main`
  margin: 1rem auto;
  padding: 2rem 2rem;
  display: grid;
  gap: 1rem;
`;

const Clear = styled.input`
  text-align: center;
  padding: 5px;
  width: 30%;
  height: 50px;
  margin: auto;
  background-color: #b4345c;
  color: #fffafa;
  cursor: poiner;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    opacity: 0.75;
  }
`;

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Button = styled.input`
  background-color: #b4345c;
  color: #fffafa;
  width: 4rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    opacity: 0.75;
  }
`;

export default Search;
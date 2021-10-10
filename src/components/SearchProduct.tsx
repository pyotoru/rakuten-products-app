import { useCallback, useState } from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../app/store";
import { productsSlice } from "../features/products/productsSlice";

function Search(props: any) {
  const [productQuery, setProductQuery] = useState("");
  // const dispatch = useDispatch();
  const dispatch = useDispatch<AppDispatch>();

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

  // const handleClear = (e: any) => {
  //   const uri = "";
  //   e.preventDefault();
  //   const clearProducts = createAsyncThunk(
  //     "products/getProducts",
  //     async (dispatch, getState) => {
  //       return await fetch(uri).then((res) => res.status);
  //     }
  //   );
  //   dispatch(clearProducts());
  // };

  const onClear = useCallback(() => {
    dispatch(productsSlice.actions.clearProducts());
  }, []);

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
        <Clear type="reset" value="検索結果クリア" onClick={onClear} />
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
  @media (max-width: 768px) {
    width: 40%;
  }
`;

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 768px) {
    width: 10rem;
  }
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

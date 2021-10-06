import {useState} from "react";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import styled from "styled-components";

function Search(props: any) {
  const [productQuery, setProductQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    const uri =
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1078733059924735380&keyword=" +
      productQuery;
    e.preventDefault();
    console.log(uri);
    const gotProducts = createAsyncThunk(
      "products/getProducts",
      async (dispatch, getState) => {
        return await fetch(uri).then((res) => res.json());
      }
    );
    dispatch(gotProducts());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          type="text"
          value={productQuery}
          onChange={(e) => setProductQuery(e.target.value)}
        />
      </label>
      <Button type="submit" value="検索" />
    </Form>
  );
}

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 10rem;
`;

const Button = styled.input`
  background-color: #b4345c;
  color: #f5fffa;
`;

export default Search;

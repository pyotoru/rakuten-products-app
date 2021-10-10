import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (dispatch, getState) => {
    return await fetch(
      "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=1078733059924735380&keyword=a&sort=%2BitemPrice"
    ).then((res) => res.json());
  }
);

export const productsSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    status: "",
  },
  reducers: {
    clearProducts: (state) => {
      return { ...state, products: [] }
    }
  },
  extraReducers: {
    [getProducts.pending.toString()]: (state, action) => {
      state.status = "loading";
    },
    [getProducts.fulfilled.toString()]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [getProducts.rejected.toString()]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default productsSlice.reducer;
export type RootState = ReturnType<any>;

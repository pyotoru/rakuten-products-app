// import React, {useEffect} from "react";
// import styled, {createGlobalStyle} from "styled-components";
import Home from "./components/Home";
import Main from "./components/Main";
import {Route} from "react-router-dom";
// import handleSubmit from "./components/Submit";

// import {useSelector, useDispatch} from "react-redux";
// import {getProducts, RootState} from "./features/products/productsSlice";

function App() {
  // const dispatch = useDispatch();
  // const {products} = useSelector((state: RootState) => state.products);
  // // const productDetails = products.Items;
  // // const productDetailsTwo = productDetails[0].Item;
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Main" component={Main} />
    </div>
  );
}

export default App;

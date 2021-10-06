import {useEffect} from "react";
import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../features/products/productsSlice";
import Search from "./SubmitFunction";

import {getProducts} from "../features/products/productsSlice";

function Main() {
  const dispatch = useDispatch();
  const {products} = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const removeProducts = () => {
    var itemToRemove = document.getElementById("products");
    itemToRemove?.remove();
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <NavLink to="/">
          <Button>Homeへ </Button>
        </NavLink>
        <Search />
        <Button>検索</Button>
        <Button onClick={removeProducts}> クリア</Button>
        <ProductsDisplay>商品一覧</ProductsDisplay>
        <Products>
          <ProductInfo>
            商品名
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: any) => (
                  <Product key={i}>{product.Item.itemName}</Product>
                ))}
            </Description>
          </ProductInfo>
          <ProductInfo>
            キャッチコピー
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: any) => {
                  if (product.Item.catchcopy.length !== 0) {
                    return <Product key={i}>{product.Item.catchcopy}</Product>;
                  } else {
                    return <Product key={i}>-</Product>;
                  }
                })}
            </Description>
          </ProductInfo>
          <ProductInfo>
            商品価格
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: any) => (
                  <Product key={i}>{product.Item.itemPrice}</Product>
                ))}
            </Description>
          </ProductInfo>
          <ProductInfo>
            商品説明文
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: any) => (
                  <Product key={i}>{product.Item.itemCaption}</Product>
                ))}
            </Description>
          </ProductInfo>
          <ProductInfo>
            商品URL
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: any) => (
                  <Product key={i}>{product.Item.itemUrl}</Product>
                ))}
            </Description>
          </ProductInfo>
        </Products>
      </Container>
    </div>
  );
}

export default Main;

const Product = styled.h4`
  height: 200px;
  color: #b4345c;
`;

const Description = styled.header`
  font-size: 0.75rem;
  color: #b4345c;
`;

const ProductsDisplay = styled.h2`
  text-align: center;
  color: #b4345c;
`;

const ProductInfo = styled.h3`
  font-size: 1rem;
  color: #b4345c;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 4fr 1fr;
  column-gap: 15px;
  text-align: center;
`;

const Text = styled.input`
  width: 30%;
  margin: auto;
  text-align: center;
`;

const Button = styled.button`
  text-align: center;
  padding: 5px;
  width: 30%;
  margin: auto;
  background-color: #b4345c;
  color: #f5fffa;
`;

const GlobalStyle = createGlobalStyle`
body {
  background-color: #F5FFFA;
}
`;

const Container = styled.main`
  margin: 5rem auto;
  padding: 2.5rem 3rem;
  display: grid;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #f5fffa;
  text-align: center;
`;

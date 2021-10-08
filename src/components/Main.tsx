import styled from "styled-components";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../features/products/productsSlice";
import Search from "./SearchProduct";

function Main() {
  const { products } = useSelector((state: RootState) => state.products);

  return (
    <div>
      <Container>
        <NavLink to="/">
          <Button>Homeへ </Button>
        </NavLink>
        <Search />
        <ProductsDisplay>商品一覧</ProductsDisplay>
        <Products>
          <ProductInfo>
            <ProductType>商品名</ProductType>
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: number) => (
                  <Product key={i}>{product.Item.itemName}</Product>
                ))}
            </Description>
          </ProductInfo>
          <ProductInfo>
            <ProductType>キャッチコピー</ProductType>
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: number) => {
                  if (product.Item.catchcopy.length !== 0) {
                    return <Product key={i}>{product.Item.catchcopy}</Product>;
                  } else {
                    return <Product key={i}>-</Product>;
                  }
                })}
            </Description>
          </ProductInfo>
          <ProductInfo>
            <ProductType>商品価格</ProductType>
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: number) => (
                  <Product key={i}>{product.Item.itemPrice}</Product>
                ))}
            </Description>
          </ProductInfo>
          <ProductInfo>
            <ProductType>商品説明文</ProductType>
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: number) => (
                  <Product key={i}>{product.Item.itemCaption}</Product>
                ))}
            </Description>
          </ProductInfo>
          <ProductInfo>
            <ProductType>商品URL</ProductType>
            <Description>
              {products.Items &&
                products.Items.map((product: any, i: number) => (
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

const ProductType = styled.h3`
  text-decoration: underline;
  color: #fffafa;
  background-color: #b4345c;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-top: 70px;
  font-size: 1rem;
  margin: 0;
  height: 100px;
`;

const Product = styled.h4`
  overflow: scroll;
  height: 200px;
  color: #b4345c;
  font-size: 0.8rem;
`;

const Description = styled.header`
  font-size: 0.75rem;
  color: #b4345c;
`;

const ProductsDisplay = styled.h2`
  text-align: center;
  padding: 10px;
  color: #fffafa;
  background-color: #b4345c;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ProductInfo = styled.h3`
  color: #b4345c;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  text-align: center;
`;

const Button = styled.button`
  text-align: center;
  padding: 5px;
  width: 30%;
  margin: auto;
  background-color: #b4345c;
  color: #fffafa;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    opacity: 0.75;
  }
`;

const Container = styled.main`
  margin: auto;
  padding: 2.5rem 3rem;
  display: grid;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #f5fffa;
  text-align: center;
  &:hover {
    opacity: 0.75;
  }
`;

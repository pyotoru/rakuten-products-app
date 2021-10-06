import styled, {createGlobalStyle} from "styled-components";
import {Link} from "react-router-dom";
// import NameForm from "./Submit";

function Home() {
  return (
    <Container>
      {/* <NameForm /> */}
      <GlobalStyle />
      <Header>
        <Title>
          当サービスは、ユーザの入力値に応じて楽天の商品情報を表示するサービスです。
        </Title>
      </Header>
      <Button>商品一覧画面</Button>

      <NavLink to="/Main">
        <Button>main画面へ移動</Button>
      </NavLink>
    </Container>
  );
}

const Button = styled.button`
  text-align: center;
  padding: 5px;
  width: 30%;
  margin: auto;
  background-color: #b4345c;
  color: #f5fffa;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #f5fffa;
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
body {
  background-color: #F5FFFA;
   text-decoration: none;
}
`;

const Header = styled.header`
  margin: 5px;
`;

const Container = styled.main`
  margin: 5rem auto;
  padding: 2.5rem 2rem;
  display: grid;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  margin: 1em;
  color: #b4345c;
`;

export default Home;

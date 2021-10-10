import Home from "./components/Home";
import Main from "./components/Main";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route exact path="/Main" component={Main} />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body {
  min-height: 100vh;
  // background-color: #FFFAFA;
    background: linear-gradient(to right top, #FFA07A, #FBCEB1);

}
`;

export default App;

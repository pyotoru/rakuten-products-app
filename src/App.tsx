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
  background-color: #fffafa;
}
`;

export default App;
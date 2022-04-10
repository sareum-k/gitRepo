import GlobalStyle from "./GlobalStyle";
import { RecoilRoot } from "recoil";
import Main from "./pages/Main";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Main />
    </RecoilRoot>
  );
};

export default App;

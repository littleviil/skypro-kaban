import { Wrapper } from "./components/Wrapper/Wrapper";
import { PopExit } from "./components/popups/PopExit/PopExit";
import { PopNewCard } from "./components/popups/PopNewCard/PopNewCard";
import { PopBrowse } from "./components/popups/PopBrowse/PopBrowse";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import "./App.css";

function App() {
  return (
    <>
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        <Main />
      </Wrapper>
      <script src="js/script.js"></script>
    </>
  );
}

export default App;
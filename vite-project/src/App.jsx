import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import Wrapper from "./components/Wrapper/Wrapper";
import { useState } from "react";
import { cardList } from "./data";
import { useEffect } from "react";
import { GlobalStyle } from "./global.styled";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded((isLoaded) => {
        !isLoaded;
      });
    }, 2000);
  }, []);

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: "test",
        title: "test",
        date: "30.10.23",
        status: "Тестирование",
      },
    ]);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} />
        <Main cardList={cards} isLoaded={isLoaded} />
      </Wrapper>
    </>
  );
}

export default App;
import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PopNewCard } from './components/PopNewCard/PopNewCard'
import { PopBrowse } from './components/PopBrowse/PopBrowse'
import { PopExit } from './components/PopExit/PopExit'
import { cardList } from './data'
import { GlobalStyle } from './global.styled.js';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './theme.js';

function App() {

  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(false);

  const addCard = () => {
     const newCard = {
      id:  cards.length + 1,
      topic:"Web Design" ,
      title:"Новая задача",
      date: "8.06.24",
      status:"Без статуса",
     };
     setCards([...cards, newCard])
  };

  useEffect(() => {
      setIsLoading(true)
      setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  
  }, []);

  return (
     <>
     <ThemeProvider theme = {changeTheme === "light" ? light : dark}>
     <GlobalStyle />
     <div className="wrapper">
			<PopExit/>
			<PopNewCard/>
			<PopBrowse/>
		  <Header addCard={addCard}/>
      {isLoading? <img className='loader' src="public/loading.gif" alt="" /> : 	 
        <Main cards={cards}/>
      };
    </div>
    </ThemeProvider>
    </>
  );
};

export default App
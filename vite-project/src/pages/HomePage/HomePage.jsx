import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { cardList } from '../../data/data';
// import PopNewCard from '../../components/PopNewCard/PopNewCard';
import { Outlet } from 'react-router-dom';

export default function HomePage({setIsAuth}) {
    const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState(cardList)
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
      }, []);
    const onAddCard = () => {
		const newCard = {
		  id: Date.now(),
		  title: "Новая задача",
		  topic: "Без темы",
		  date: "10.05.2024",
		  status: "Без статуса",
		}
		setCards([...cards, newCard]);
	};
    return (
        <>
            <Header setIsAuth={setIsAuth} onAddCard={onAddCard} />
                {isLoading ? <h1 className='load'>Данные загружаются...</h1> : <Main cardList={cards} />}
            <Outlet />
        </>
    )
}
import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { cardList } from '../../Data';
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
    function addCard () {
        const newTask = {
          id: cards.length + 1,
          topic: "Web Design",
          title: "Название задачи",
          date: "27.06.24",
          status: "Без статуса",
        }
        setCards([...cards, newTask]);
    }
    return (
        <>
            <Header setIsAuth={setIsAuth} />
                {isLoading ? <h1 className='load'>Данные загружаются...</h1> : <Main cardList={cards} />}
            <Outlet />
        </>
    )
}
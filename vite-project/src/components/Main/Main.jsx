import * as S from "./Main.styled.js";
import { useEffect, useState } from "react";
import Column from "../Column/Column.jsx";
import { statusList } from "../../data/data.js";

const Main = ({ cards }) => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {isLoading && <p>Идёт загрузка...</p> }
            {!isLoading && statusList.map((status, i) => (
              <Column
                key={i}
                title={status}
                cards={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
    );
};

export default Main;
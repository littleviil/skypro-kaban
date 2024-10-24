import * as S from "./Main.styled.js";
import Column from "../Column/Column.jsx";
import { statusList } from "../../data/data.js";

const Main = ({ cards }) => {
    return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status, i) => (
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
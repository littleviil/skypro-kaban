import * as S from "./Column.styled.js";
import Card from "../Card/Card";

const Column = ({title, cards }) => {
  return (
    <>
      <S.MainColumn>
        <S.ColumnTitle>
          <S.ColumnText>{title}</S.ColumnText>
        </S.ColumnTitle>
            <S.Cards>
              {cards.map(({id, topic, title, date}) => (
                    <Card 
                    key = {id} 
                    topic = {topic} 
                    title = {title} 
                    date = {date}/>
              ))}
            </S.Cards>
      </S.MainColumn>
    </>
  );
};

export default Column;
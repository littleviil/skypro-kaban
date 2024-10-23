import * as S from "./Calendar.styled.js";

function Calendar() {
  return (
    <S.Calendar>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.Calendarblock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </S.NavAction>
            <S.NavAction data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.CalendarDaysNames>
            <S.CalendarDayName>пн</S.CalendarDayName>
            <S.CalendarDayName>вт</S.CalendarDayName>
            <S.CalendarDayName>ср</S.CalendarDayName>
            <S.CalendarDayName>чт</S.CalendarDayName>
            <S.CalendarDayName>пт</S.CalendarDayName>
            <S.CalendarDayName>сб</S.CalendarDayName>
            <S.CalendarDayName>вс</S.CalendarDayName>
          </S.CalendarDaysNames>
          <S.CalendarCells>
            <S.CalendarCellM>28</S.CalendarCellM>
            <S.CalendarCellM>29</S.CalendarCellM>
            <S.CalendarCellM>30</S.CalendarCellM>
            <S.CalendarCellD>31</S.CalendarCellD>
            <S.CalendarCellD>1</S.CalendarCellD>
            <S.CalendarCellD>2</S.CalendarCellD>
            <S.CalendarCellD>3</S.CalendarCellD>
            <S.CalendarCellD>4</S.CalendarCellD>
            <S.CalendarCellD>5</S.CalendarCellD>
            <S.CalendarCellD>6</S.CalendarCellD>
            <S.CalendarCellD>7</S.CalendarCellD>
            <S.CalendarCellDCur>8</S.CalendarCellDCur>
            <S.CalendarCellD>9</S.CalendarCellD>
            <S.CalendarCellD>10</S.CalendarCellD>
            <S.CalendarCellD>11</S.CalendarCellD>
            <S.CalendarCellD>12</S.CalendarCellD>
            <S.CalendarCellD>13</S.CalendarCellD>
            <S.CalendarCellD>14</S.CalendarCellD>
            <S.CalendarCellD>15</S.CalendarCellD>
            <S.CalendarCellD>16</S.CalendarCellD>
            <S.CalendarCellD>17</S.CalendarCellD>
            <S.CalendarCellD>18</S.CalendarCellD>
            <S.CalendarCellD>19</S.CalendarCellD>
            <S.CalendarCellD>20</S.CalendarCellD>
            <S.CalendarCellD>21</S.CalendarCellD>
            <S.CalendarCellD>22</S.CalendarCellD>
            <S.CalendarCellD>23</S.CalendarCellD>
            <S.CalendarCellD>24</S.CalendarCellD>
            <S.CalendarCellD>25</S.CalendarCellD>
            <S.CalendarCellD>26</S.CalendarCellD>
            <S.CalendarCellD>27</S.CalendarCellD>
            <S.CalendarCellD>28</S.CalendarCellD>
            <S.CalendarCellD>29</S.CalendarCellD>
            <S.CalendarCellD>30</S.CalendarCellD>
            <S.CalendarCellM>1</S.CalendarCellM>
          </S.CalendarCells>
        </S.CalendarContent>
        <S.CalendarInput type="hidden" value="08.09.2023" />
        <S.CalendarPeriod >
          <p>
            Выберите срок исполнения <span></span>.
          </p>
          {/*<p>*/}
          {/*  Срок исполнения:{" "}*/}
          {/*  <span>09.09.23</span>*/}
          {/*</p>*/}
        </S.CalendarPeriod>
      </S.Calendarblock>
    </S.Calendar>
  );
}

export default Calendar;
import * as S from "./Calendar.style";
function Calendar() {
  return (
    <>
      <S.calendar>
        <S.calendarTtl>Даты</S.calendarTtl>
        <S.calendarBlock>
          <S.calendarNav>
            <S.calendarMonth>Сентябрь 2023</S.calendarMonth>
            <S.navActions>
              <S.navAction data-action="prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </S.navAction>
              <S.navAction data-action="next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                </svg>
              </S.navAction>
            </S.navActions>
          </S.calendarNav>
          <S.calendarContent>
            <S.calendarDaysNames>
              <S.calendarDayName>пн</S.calendarDayName>
              <S.calendarDayName>вт</S.calendarDayName>
              <S.calendarDayName>ср</S.calendarDayName>
              <S.calendarDayName>чт</S.calendarDayName>
              <S.calendarDayName>пт</S.calendarDayName>
              <S.calendarDayName>сб</S.calendarDayName>
              <S.calendarDayName>вс</S.calendarDayName>
            </S.calendarDaysNames>
            <S.calendarCells>
              <S.calendarCell>28</S.calendarCell>
              <S.calendarCell>29</S.calendarCell>
              <S.calendarCell>30</S.calendarCell>
              <S.calendarCell>31</S.calendarCell>
              <S.calendarCell>1</S.calendarCell>
              <S.calendarCell>2</S.calendarCell>
              <S.calendarCell>3</S.calendarCell>
              <S.calendarCell>4</S.calendarCell>
              <S.calendarCell>5</S.calendarCell>
              <S.calendarCell>6</S.calendarCell>
              <S.calendarCell>7</S.calendarCell>
              <S.calendarCell>8</S.calendarCell>
              <S.calendarCell>9</S.calendarCell>
              <S.calendarCell>10</S.calendarCell>
              <S.calendarCell>11</S.calendarCell>
              <S.calendarCell>12</S.calendarCell>
              <S.calendarCell>13</S.calendarCell>
              <S.calendarCell>14</S.calendarCell>
              <S.calendarCell>15</S.calendarCell>
              <S.calendarCell>16</S.calendarCell>
              <S.calendarCell>17</S.calendarCell>
              <S.calendarCell>18</S.calendarCell>
              <S.calendarCell>19</S.calendarCell>
              <S.calendarCell>20</S.calendarCell>
              <S.calendarCell>21</S.calendarCell>
              <S.calendarCell>22</S.calendarCell>
              <S.calendarCell>23</S.calendarCell>
              <S.calendarCell>24</S.calendarCell>
              <S.calendarCell>25</S.calendarCell>
              <S.calendarCell>26</S.calendarCell>
              <S.calendarCell>27</S.calendarCell>
              <S.calendarCell>28</S.calendarCell>
              <S.calendarCell>29</S.calendarCell>
              <S.calendarCell>30</S.calendarCell>
              <S.calendarCell>1</S.calendarCell>
            </S.calendarCells>
          </S.calendarContent>

          <input type="hidden" id="datepick_value" value="08.09.2023" />
          <S.calendarPeriod>
            <S.calendarP>
              Выберите срок исполнения <span className="date-control"></span>.
            </S.calendarP>
          </S.calendarPeriod>
        </S.calendarBlock>
      </S.calendar>
    </>
  );
}
export default Calendar;

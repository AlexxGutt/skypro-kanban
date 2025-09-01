import { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { ru } from "date-fns/locale";
import * as S from "./Calendar.style";

function Calendar({
  selectedDate: externalDate,
  onDateChange,
  isReadOnly = false,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [internalSelectedDate, setInternalSelectedDate] = useState(new Date());

  const selectedDate =
    externalDate !== undefined ? externalDate : internalSelectedDate;

  const nextMonth = () => {
    if (!isReadOnly) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  const prevMonth = () => {
    if (!isReadOnly) {
      setCurrentDate(subMonths(currentDate, 1));
    }
  };

  const onDateClick = (day) => {
    if (!isReadOnly) {
      if (onDateChange) {
        onDateChange(day);
      } else {
        setInternalSelectedDate(day);
      }
    }
  };

  const renderHeader = () => {
    return format(currentDate, "LLLL yyyy", { locale: ru });
  };

  const renderDays = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      const cloneDay = day;
      days.push(
        <S.calendarCell
          key={day.toString()}
          className={`
            ${!isSameMonth(day, monthStart) ? "disabled" : ""}
            ${isSameDay(day, selectedDate) ? "selected" : ""}
            ${isSameDay(day, new Date()) ? "today" : ""}
            ${isReadOnly ? "readonly" : ""}
          `}
          onClick={() => onDateClick(cloneDay)}
        >
          {format(day, "d")}
        </S.calendarCell>
      );
      day = addDays(day, 1);
    }

    return <S.calendarCells>{days}</S.calendarCells>;
  };

  return (
    <S.calendar>
      <S.calendarTtl>Даты</S.calendarTtl>
      <S.calendarBlock>
        <S.calendarNav>
          <S.calendarMonth>{renderHeader()}</S.calendarMonth>
          {!isReadOnly && (
            <S.navActions>
              <S.navAction data-action="prev" onClick={prevMonth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </S.navAction>
              <S.navAction data-action="next" onClick={nextMonth}>
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
          )}
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
          {renderDays()}
        </S.calendarContent>

        <input
          type="hidden"
          id="datepick_value"
          value={format(selectedDate, "dd.MM.yyyy")}
        />
        <S.calendarPeriod>
          <S.calendarP>
            Срок исполнения{" "}
            <span className="date-control">
              {format(selectedDate, "dd.MM.yyyy")}
            </span>
            .
          </S.calendarP>
        </S.calendarPeriod>
      </S.calendarBlock>
    </S.calendar>
  );
}

export default Calendar;

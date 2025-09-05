import styled, { css } from "styled-components";

export const calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const subttl = css`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const calendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }

  ${subttl}
`;

export const calendarBlock = styled.div`
  display: block;
`;

export const calendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const calendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const navActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const navAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    fill: #94a6be;
  }
`;

export const calendarContent = styled.div`
  margin-bottom: 12px;
`;

export const calendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const calendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const calendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const calendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
  &.selected {
    background-color: #94a6be;
    color: white;
  }
  &.today {
    border: 1px solid #94a6be;
  }
  &.disabled {
    color: #ccc;

    &:hover {
      background-color: transparent;
    }
  }
  &.readonly {
    cursor: default;

    &:hover {
      background-color: transparent;
      color: #94a6be;
    }

    &.selected {
      background-color: #94a6be;
      color: white;
    }
  }

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const calendarPeriod = styled.div`
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const calendarP = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  margin-top: 10px;
  & span {
    color: #000000;
  }
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

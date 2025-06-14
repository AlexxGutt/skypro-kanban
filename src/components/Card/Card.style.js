import styled from "styled-components";

const topicColor = {
  "Web Design": { backgroundColor: "#ffe4c2", color: "#ff6d00" },
  "Research": { backgroundColor: "#b4fdd1", color: "#06b16e" },
  "Copywriting": { backgroundColor: "#e9d4ff", color: "#9a48f1" },
};

export const card = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  & card {
    padding: 2em;
  }
`;

export const cardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const cardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) => topicColor[props.$topic].backgroundColor};
  color: ${(props) => topicColor[props.$topic].color};
  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const cardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const cardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const cardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
export const cardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  text-decoration: ${(props) => props.$textDecoration};
`;

export const cardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

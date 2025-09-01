import styled, { css } from "styled-components";

const topicColor = {
  "Web Design": { backgroundColor: "#ffe4c2", color: "#ff6d00" },
  "Research": { backgroundColor: "#b4fdd1", color: "#06b16e" },
  "Copywriting": { backgroundColor: "#e9d4ff", color: "#9a48f1" },
};

export const popBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const popBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const popBbrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const popBrowseContent = styled.div`
  display: block;
  text-align: left;
  @media screen and (max-width: 495px) {
    display: block;
    margin-bottom: 20px;
  }
`;

export const popBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const popBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const categoriesThemeTopActiveCategory = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  opacity: 1 !important;
  background-color: ${(props) => topicColor[props.$topic].backgroundColor};
  color: ${(props) => topicColor[props.$topic].color};
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
  @media screen and (max-width: 495px) {
    display: none;
  }
`;

export const status = styled.div`
  margin-bottom: 11px;
`;

export const statusPSubttl = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const popBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const popBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const formBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const formBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const btnGroup = styled.div`
  & button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  &:hover a {
    color: #ffffff;
  }
`;

export const btnBg = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  & a {
    color: #ffffff;
  }
  ${hover01}
`;

export const btnBor = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  & a {
    color: #565eef;
  }
  ${hover03}
`;

export const popBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    @media screen and (max-width: 495px) {
      width: 100%;
      height: 40px;
    }
  }

  ${(props) => props.$type === "browse" && props.$isEdit && `display: none`}

  ${(props) => props.$type === "edit" && !props.$isEdit && `display: none`}
`;

export const statusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const currentStatus = styled.div`
  background-color: #94a6be;
  color: #ffffff;
  padding: 11px 14px 10px;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  display: inline-block;
  width: auto;
  max-width: 100%;
  margin-right: 7px; /* ← ДОБАВИТЬ */
  margin-bottom: 7px; /* ← ДОБАВИТЬ */

  p {
    color: #ffffff;
    margin: 0;
    font-size: 14px;
    line-height: 1; /* ← ДОБАВИТЬ */
    letter-spacing: -0.14px; /* ← ДОБАВИТЬ */
  }
`;

export const statusOption = styled.div`
  padding: 11px 14px 10px;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;

  background-color: transparent;
  color: #94a6be;

  ${(props) =>
    props.$isActive &&
    `
    background-color: #94A6BE;
    color: white;
  `}

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  &:hover {
    background-color: #eaeef6;
  }
`;

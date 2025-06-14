import { styled, css } from "styled-components";

const hover02 = css`
  &:hover {
    color: #33399b;
  }
  &::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

const hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const conteiner = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const headerBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const headerLogo = styled.div`
  & img {
    width: 85px;
  }
`;

export const headerUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  ${hover02}
`;

export const headerNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const headerBtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  a {
    color: #ffffff;
  }
  ${hover01}
`;

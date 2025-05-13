import styled from "styled-components";

export const cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

export const mainColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

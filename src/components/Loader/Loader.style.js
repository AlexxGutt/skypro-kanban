import styled from "styled-components";

export const loader = styled.div`
  font-size: 26px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  clip-path: inset(0 3.2ch 0 0);
  animation: dotPulse 2s steps(5) infinite;
  @keyframes dotPulse {
    to {
      clip-path: inset(0 -1ch 0 0);
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
  @media screen and (max-width: 495px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

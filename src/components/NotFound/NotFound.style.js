import styled from "styled-components";

export const notFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
  background: #f8f9fa;
  color: #333;
  h1 {
    font-size: 5rem;
    margin: 0;
    color: #6200ea;
  }
  p {
    font-size: 1.5rem;
    margin: 1rem 0 2rem;
  }
`;

export const homeLink = styled.div`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: #6200ea;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  transition: background 0.3s;
`;

// .not-found {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   font-family: Arial, sans-serif;
//   background: #f8f9fa;
//   color: #333;
// }

// .not-found h1 {
//   font-size: 5rem;
//   margin: 0;
//   color: #6200ea;
// }

// .home-link {
//   display: inline-block;
//   padding: 0.8rem 1.5rem;
//   background: #6200ea;
//   color: white;
//   text-decoration: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   transition: background 0.3s;
// }

// .home-link:hover {
//   background: #3700b3;
// }

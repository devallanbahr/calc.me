import styled, { createGlobalStyle } from "styled-components";

export const Main = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;500;700&family=Roboto:wght@300;400;700&display=swap');
  *{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono";
    outline: none;
    user-select: none;
  }

  body{
    background-color: #121212;  
  }

`;

export const AppMain = styled.div``;
export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 1rem;
`;
export const Button = styled.input`
  padding: 1rem;
  cursor: pointer;
  font-size: 14pt;
  margin: 0.25rem;
  font-weight: 400;
  :hover {
  }
`;

export const Input = styled.input`
  width: 265px;
  font-weight: 300;
  padding-left: 0.5rem;
  height: 8.5vh;
  font-size: 18pt;

  ::placeholder {
    color: #000;
  }
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

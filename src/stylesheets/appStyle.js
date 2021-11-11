import styled, { createGlobalStyle } from "styled-components";

export const Main = createGlobalStyle`
  *{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto Mono";
  }

  body{
    background-color: #121212;
  }
`;

export const AppMain = styled.div``;
export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const Button = styled.a`
  text-decoration: none;
  padding: 1.2rem;
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

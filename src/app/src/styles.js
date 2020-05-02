
import styled, { createGlobalStyle } from "styled-components";

import imgLogo from "./logo.svg";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 20px;
    height: 100%;
  }
  
  body {
    background: #d5eef6;
    font-family: sans-serif;
    padding: 0;
    margin: 0;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.25rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 5px 9px 16px rgba(0, 0, 0, 0.19);
`;

export const Header = styled.div`
  font-family: monospace;
  text-transform: uppercase;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: span 4;
  padding: 0.5rem 0;
`;

export const Logo = styled.img.attrs({
  src: imgLogo,
  alt: "Bravelab",
})`
  max-width: 4rem;
  margin-right: 1rem;
`;

export const Field = styled.input.attrs({
  readOnly: true,
})`
  color: #333;
  font-size: 1.25rem;
  text-align: right;
  grid-column: span 4;
  padding: 1rem 0;
  border: 0;
  outline: 0;
`;

export const Button = styled.button`
  color: #ff5500;
  background: #f5f5f5;
  border: 0;
  text-align: center;
  font-size: 1rem;
  padding: 1em;
  min-width: 3.5em;
  border-radius: 0.5rem;
  outline: 0;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 0 1px #d0d0d0 inset;
  }

  &:active {
    background: #f0f0f0;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const ZeroButton = styled(Button)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 7;
`;

export const CommaButton = styled(Button)`
  grid-column: 3;
  grid-row: 7;
`;

export const ResetButton = styled(Button)`
  grid-column: 4;
  grid-row: 4;
`;

export const ResultButton = styled(Button)`
  grid-column: 4;
  grid-row-start: 5;
  grid-row-end: 8;
`;
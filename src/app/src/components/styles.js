import styled, { createGlobalStyle } from "styled-components";

import Button from "./Button/Button";

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

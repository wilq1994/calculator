import styled from "styled-components";

const Button = styled.button`
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

export default Button;

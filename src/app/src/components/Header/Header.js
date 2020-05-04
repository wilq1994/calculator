import React from "react";
import styled from "styled-components";

import imgLogo from "../../images/logo.svg";

export const Wrapper = styled.div`
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

const Header = () => (
  <Wrapper>
    Calculator
    <Logo />
  </Wrapper>
);

export default Header;

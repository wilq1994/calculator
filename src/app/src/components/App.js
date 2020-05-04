import React, { useState, useMemo } from "react";

import Header from './Header/Header';
import Button from './Button/Button';

import {
  GlobalStyle,
  Wrapper,
  Field,
  ZeroButton,
  CommaButton,
  ResetButton,
  ResultButton,
} from "./styles";


function App() {
  const [result, setResult] = useState("0");
  const [chosenSign, setChosenSign] = useState(null);
  const [chosenNumbers, setChosenNumbers] = useState(["", ""]);
  // const [add, { data }] = useMutation(ADD_MUTATION);


  const signs = ["+", "-", "*", "/"];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const commaExist = useMemo(() => !/(?:^|[+\-*/])[1-9]+$/.test(result), [
    result,
  ]);
  const lastIsSign = useMemo(() => /[.+\-*/]$/.test(result), [result]);

  function onResult() {
    console.log(chosenSign, chosenNumbers);
  }

  function onSignClick(event) {
    const s = event.target.textContent;

    if (signs.includes(s)) {
      if (chosenSign || /^0$/.test(result)) return;
      setChosenSign(s);
      setResult(result + s);
    } else {
      updateValue(s);
    }
  }

  function onNumberClick(event) {
    const n = event.target.textContent;

    if (/^0$/.test(result)) {
      setResult(n);
      setChosenNumbers([n, ""]);
    } else {
      updateValue(n);
    }
  }

  function updateValue(val) {
    setResult(result + val);
    if (chosenSign) {
      setChosenNumbers([chosenNumbers[0], chosenNumbers[1] + val]);
    } else {
      setChosenNumbers([chosenNumbers[0] + val, ""]);
    }
  }

  function onReset() {
    setResult("0");
    setChosenSign(null);
    setChosenNumbers(["", ""]);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header/>
        <Field value={result} />

        {signs.map((item, id) => (
          <Button
            key={id}
            onClick={onSignClick}
            disabled={chosenSign || lastIsSign}
          >
            {item}
          </Button>
        ))}
        {numbers.map((item, id) => (
          <Button key={id} onClick={onNumberClick}>
            {item}
          </Button>
        ))}
        <ZeroButton onClick={onNumberClick}>0</ZeroButton>

        <CommaButton onClick={onSignClick} disabled={commaExist}>
          .
        </CommaButton>
        <ResetButton onClick={onReset}>C</ResetButton>
        <ResultButton onClick={onResult} disabled={lastIsSign || !chosenSign}>
          =
        </ResultButton>
      </Wrapper>
    </>
  );
}

export default App;

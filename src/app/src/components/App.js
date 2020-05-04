import React, { useState, useMemo } from "react";
import { useApolloClient } from "@apollo/react-hooks";

import Header from "./Header/Header";
import Button from "./Button/Button";

import {
  GlobalStyle,
  Wrapper,
  Field,
  ZeroButton,
  CommaButton,
  ResetButton,
  ResultButton,
} from "./styles";

import * as Mutations from "../mutations";

const SIGN_MAPPING = {
  "+": "add",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
};

function App() {
  const [result, setResult] = useState("0");
  const [chosenSign, setChosenSign] = useState(null);
  const [chosenNumbers, setChosenNumbers] = useState(["", ""]);
  const client = useApolloClient();

  const signs = ["+", "-", "*", "/"];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const commaExist = useMemo(() => !/(?:^|[+\-*/])[0-9]+$/.test(result), [
    result,
  ]);
  const lastIsSign = useMemo(() => /[.+\-*/]$/.test(result), [result]);

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

  function onResult() {
    runMutation(SIGN_MAPPING[chosenSign]);
  }

  async function runMutation(mutation) {
    const { data } = await client.mutate({
      mutation: Mutations[mutation],
      variables: { a: chosenNumbers[0], b: chosenNumbers[1] },
    });

    setResult(data[mutation]);
    setChosenNumbers([data[mutation], ""]);
    setChosenSign(null);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
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

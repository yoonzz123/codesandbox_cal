import React, { useEffect, useState, useCallback } from "react";
import Screen from "./Screen";

import { Card, Button } from "react-bootstrap";

let num2 = "";
//const regex = /[+-*],/;

const Calculator = () => {
  const [num, setNum] = useState("");
  const [cal, setCal] = useState("");
  let regex = /[^0-9]/;
  const onClick = useCallback(
    (e) => {
      let text = e.target.innerText;
      if (regex.test(text)) {
        setCal(text);
        num1 = num;
        text = "";
      }

      setNum(num + text);
      console.log(num);
      console.log(cal);
    },
    [num]
  );

  const CE = () => {
    num1 = "";
    num2 = "";
    setNum("");
    setCal("");
  };

  // const onClick1 = useCallback(
  //   (e) => {
  //     setCal(e.target.innerText);
  //     num1 = num;
  //   },
  //   [num, cal]
  // );

  return (
    <Card>
      <Screen num={num} />
      <div className="insertBox">
        <div className="numbox">
          <button onClick={onClick}>7</button>
          <button onClick={onClick}>8</button>
          <button onClick={onClick}>9</button>
          <button onClick={onClick}>4</button>
          <button onClick={onClick}>5</button>
          <button onClick={onClick}>6</button>
          <button onClick={onClick}>1</button>
          <button onClick={onClick}>2</button>
          <button onClick={onClick}>3</button>
          <button onClick={onClick}>0</button>
          <button onClick={onClick}>00</button>
          <button onClick={onClick}>.</button>
        </div>
        <div className="calbox">
          <Button onClick={onClick}>%</Button>
          <Button onClick={CE}>CE</Button>
          <Button onClick={onClick}>*</Button>
          <Button onClick={onClick}>/</Button>
          <Button onClick={onClick}>+</Button>
          <Button onClick={onClick}>-</Button>
          <Button onClick={onClick}>=</Button>
        </div>
      </div>
    </Card>
  );
};

export default Calculator;

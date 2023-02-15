import React, { useState } from "react";
import "./Calculator.css";
// import calculate from "./logic/calculate";
import calculate from "./logic/calculate";

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div
          className="screen"
          type="text"
          value={result.next || result.total || "0"}
        />
        <div className="btn light-gray" onClick={() => handleClick("AC")}>
          AC
        </div>
        <div className="btn light-gray" onClick={() => handleClick("%")}>
          %
        </div>
        <div className="btn light-gray" onClick={() => handleClick("+/-")}>
          +/-
        </div>
        <div className="btn orange" onClick={() => handleClick("/")}>
          /
        </div>
        <div className="btn" onClick={() => handleClick("7")}>
          7
        </div>
        <div className="btn" onClick={() => handleClick("8")}>
          8
        </div>
        <div className="btn" onClick={() => handleClick("9")}>
          9
        </div>
        <div className="btn orange" onClick={() => handleClick("X")}>
          X
        </div>
        <div className="btn" onClick={() => handleClick("4")}>
          4
        </div>
        <div className="btn" onClick={() => handleClick("5")}>
          5
        </div>
        <div className="btn" onClick={() => handleClick("6")}>
          6
        </div>
        <div className="btn orange" onClick={() => handleClick("+")}>
          +
        </div>
        <div className="btn" onClick={() => handleClick("1")}>
          1
        </div>
        <div className="btn" onClick={() => handleClick("2")}>
          2
        </div>
        <div className="btn" onClick={() => handleClick("3")}>
          3
        </div>
        <div className="btn orange" onClick={() => handleClick("-")}>
          -
        </div>
        <div className="btn" onClick={() => handleClick("0")}>
          0
        </div>
        <div className="btn" onClick={() => handleClick(".")}>
          .
        </div>
        <div className="btn" onClick={() => handleClick("=")}>
          =
        </div>
      </div>
    </div>
  );
}

export default Calculator;

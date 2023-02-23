import React, { useState } from 'react';
import calculate from './logic/calculate';
import '../Calculator.css';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setResult(calculate(result, e.target.textContent));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <input
          className="screen"
          type="text"
          value={result.next || result.total || '0'}
          defaultValue=""
        />
        <button type="button" className="btn light-gray" onClick={handleClick}>
          AC
        </button>
        <button type="button" className="btn light-gray" onClick={handleClick}>
          %
        </button>
        <button type="button" className="btn light-gray" onClick={handleClick}>
          +/-
        </button>
        <button type="button" className="btn orange" onClick={handleClick}>
          ÷
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          7
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          8
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          9
        </button>
        <button type="button" className="btn orange" onClick={handleClick}>
          x
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          4
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          5
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          6
        </button>
        <button type="button" className="btn orange" onClick={handleClick}>
          +
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          1
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          2
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          3
        </button>
        <button type="button" className="btn orange" onClick={handleClick}>
          -
        </button>
        <button type="button" className="btn zero" onClick={handleClick}>
          0
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          .
        </button>
        <button type="button" className="btn" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;

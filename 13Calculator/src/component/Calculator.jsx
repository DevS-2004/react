import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="calculator unique-theme">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {["C", "(", ")", "←", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "%", "+", "^", "sqrt", "log", "="]
          .map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') return handleEqual();
                if (btn === 'C') return handleClear();
                if (btn === '←') return handleBackspace();
                if (btn === 'sqrt') return setInput((prev) => `Math.sqrt(${prev})`);
                if (btn === 'log') return setInput((prev) => `Math.log10(${prev})`);
                if (btn === '^') return setInput((prev) => prev + '**');
                return handleClick(btn);
              }}
              className={
                btn === '=' ? 'equal' :
                btn === 'C' ? 'clear' :
                btn === '←' ? 'backspace' : ''
              }
            >
              {btn}
            </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;

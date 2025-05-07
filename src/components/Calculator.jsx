import React from 'react';
import Display from './Display';
import DisplayName from './DisplayName';
import Buttons from './Buttons';
import useCalculatorLogic from './useCalculatorLogic';

function Calculator() {
  const { input, handleButtonClick } = useCalculatorLogic();

  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
    }}>
      <DisplayName value="2020112142 이형우" />  
      <br />
      <Display value={input} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;

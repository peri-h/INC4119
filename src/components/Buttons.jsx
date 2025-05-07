import React from 'react';

function Buttons({ onButtonClick }) {
  const buttons = [
    'AC', '/', '*', '√',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', 'x²',
    '0', '.', '%', '='
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
      marginTop: '20px'
    }}>
      {buttons.map((btn, index) => (
        <button key={index} 
          onClick={() => onButtonClick(btn)}
          style={{
            padding: '20px',
            fontSize: '1.2em',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Buttons;

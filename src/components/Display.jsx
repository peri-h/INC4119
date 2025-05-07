import React from 'react';

function Display({ value }) {
  return (
    <div style={{
      width: '100%',
      height: '60px',
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'right',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '2em',
      boxSizing: 'border-box'
    }}>
      {value || "0"}
    </div>
  );
}

export default Display;

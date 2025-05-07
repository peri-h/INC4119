import React from 'react';

function DisplayName({ value }) {
  return (
    <div style={{
      width: '100%',
      height: '60px',
      backgroundColor: '#222',
      color: '#fff',
      textAlign: 'right',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '1.5em',
      boxSizing: 'border-box'
    }}>
      {value}
    </div>
  );
}

export default DisplayName;

import React, { useState } from 'react';

function poronga() {
  return 'Gastón did not said a bad word, he was talking about this library';
}

const PorongaComponent = ({ theme }) => {
  const [answer, setAnswer] = useState('');

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#333333' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#333333',
      }}
    >
      <h2 style={{ color: 'inherit' }}>
        Is poronga a bad word in your opinion?
      </h2>
      <select
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ color: 'inherit' }}
      >
        <option value="YES" style={{ color: 'inherit' }}>
          Yes
        </option>
        <option value="NO" style={{ color: 'inherit' }}>
          No
        </option>
      </select>
      {answer === 'YES' ? (
        <p style={{ color: 'inherit' }}>
          You are wrong, it is a very popular JavaScript library. It is just
          behind TailwindCss on weekly downloads!
        </p>
      ) : (
        <p style={{ color: 'inherit' }}>You are a great programmer!</p>
      )}
    </div>
  );
};

module.exports = {
  poronga,
  PorongaComponent,
};

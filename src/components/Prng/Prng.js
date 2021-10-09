import { useState } from 'react';

export const Prng = () => {
  const [isDarkThemed, setIsDarkThemed] = useState(true);
  const [answer, setAnswer] = useState('');

  const btnStyles = {
    color: isDarkThemed ? '#ffffff' : '#333333',
    backgroundColor: isDarkThemed ? '#4b4841' : '#ffffff',
    boxShadow: `0 0 2px 2px ${
      isDarkThemed ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
    }`,
    border: 'none',
    padding: '10px 40px',
    cursor: 'pointer',
    transition: 'all .2s ease-in',
  };

  const wrapperStyles = {
    backgroundColor: isDarkThemed ? '#333333' : '#cccccc',
    color: isDarkThemed ? '#ffffff' : '#333333',
    maxWidth: '750px',
    margin: '0 auto',
    transition: 'all .2s ease-in',
    padding: '20px',
  };

  const optionBtnStyles = {
    color: isDarkThemed ? '#ffffff' : '#333333',
    backgroundColor: isDarkThemed ? '#4b4841' : '#ffffff',
    border: 'none',
    padding: '10px 40px',
    cursor: 'pointer',
    transition: 'all .2s ease-in',
    borderRadius: '5px',
  };

  return (
    <div style={wrapperStyles}>
      <button
        style={btnStyles}
        onClick={() => setIsDarkThemed((prev) => !prev)}
      >
        Toggle theme
      </button>
      <div>
        <h3>
          You probably thought that poronga is a bad word, but now you see it is
          a JavaScript library <i>(one of the most popular to be honest)</i>.
        </h3>
      </div>
      <div>
        <p>
          Now I ask you, do you still think is a bad word, a thing that must not
          be said, let's say in an office for example...?
        </p>
        <button style={optionBtnStyles} onClick={() => setAnswer('Y')}>
          Yes
        </button>
        <button
          style={{ ...optionBtnStyles, marginLeft: 10 }}
          onClick={() => setAnswer('N')}
        >
          No
        </button>
        {answer !== '' && (
          <button
            style={{ ...optionBtnStyles, marginLeft: 10 }}
            onClick={() => setAnswer('')}
          >
            Let me think again
          </button>
        )}
      </div>
      <div>
        {answer === 'Y' && <p>Well... you're an ignorant :)</p>}
        {answer === 'N' && <p>You are a great programmer!</p>}
      </div>
    </div>
  );
};

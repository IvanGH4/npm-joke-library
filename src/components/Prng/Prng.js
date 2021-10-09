import React, { useState } from 'react';

export const Prng = ({ dark, light }) => {
  const [isDarkThemed, setIsDarkThemed] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState('');

  if (!dark || !light) {
    return (
      <p>
        You are not doing it right, check the{' '}
        <a
          href="https://my-lib-docs.vercel.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Docs
        </a>
      </p>
    );
  }

  const btnStyles = {
    color: isDarkThemed ? `${light}` : `${dark}`,
    backgroundColor: isDarkThemed ? `${dark}` : `${light}`,
    boxShadow: `0 0 2px 2px ${
      isDarkThemed ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'
    }`,
    border: 'none',
    padding: '10px 40px',
    cursor: 'pointer',
    transition: 'all .2s ease-in',
  };

  const wrapperStyles = {
    backgroundColor: isDarkThemed ? `${dark}` : `${light}`,
    color: isDarkThemed ? `${light}` : `${dark}`,
    maxWidth: '750px',
    margin: '0 auto',
    transition: 'all .2s ease-in',
    padding: '20px',
    position: 'relative',
  };

  const optionBtnStyles = {
    color: isDarkThemed ? `${light}` : `${dark}`,
    backgroundColor: isDarkThemed ? `${dark}` : `${light}`,
    border: 'none',
    padding: '10px 40px',
    cursor: 'pointer',
    transition: 'all .2s ease-in',
    borderRadius: '5px',
    border: 'solid 1px #ff6622',
  };

  const modalStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 100,
    display: modalOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
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
        <p>Tell us what you love about this library:</p>
        <input
          placeholder="Your opinion is really important to us"
          onChange={(e) => setText(e.target.value)}
        />
        <p>{text}</p>
        <button style={optionBtnStyles} onClick={() => setModalOpen(true)}>
          Send
        </button>
      </div>
      <div style={modalStyles}>
        <p>Did you think this worked? Haha</p>
        <button style={optionBtnStyles} onClick={() => setModalOpen(false)}>
          Close and go home
        </button>
      </div>
    </div>
  );
};

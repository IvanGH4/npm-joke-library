import React from 'react';
import './Btn.css';

const SubmitBtn = ({ children, type, aspect, onClick }) => {
  return (
    <button className={`btn ${type.toLowerCase()} ${aspect.toLowerCase()}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default SubmitBtn

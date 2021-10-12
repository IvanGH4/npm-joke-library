import React, { useState } from 'react';

const FormControl = ({name, label, placeholder, type, fullWidth, isDark, setInputValues}) => {
  const [value, setValue] = useState("");

  return (
    <div className={`form-control ${fullWidth && 'full'}`}>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setInputValues({[name]: e.target.value})
        }}
        name={name}
        id={label}
        placeholder={placeholder || ""}
        type={type || 'text'}
        className={`${isDark && 'dark'}`}
      />
    </div>
  )
}

export default FormControl;

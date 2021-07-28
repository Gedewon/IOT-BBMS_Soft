import React, { useState } from 'react';
import './Switch.css';
const Switch = ({ id }) => {
  const [value, setValue] = useState(false);

  return (
    <>
      <input
        checked={value}
        onChange={() => setValue(!value)}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <label
        style={{ background: value && '#06D6A0' }}
        className="react-switch-label"
        htmlFor={id}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;

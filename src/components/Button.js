// Button.js (Button component)
import React from 'react';
import './Button.css'; // Optional: Create a Button.css file for styling

const Button = ({ onClick, children, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button ${className || ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
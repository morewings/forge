import React from "react";
import classes from './Button.module.css';

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? classes.primary : classes.secondary;
  return (
    <button
      type="button"
      className={[classes.button, classes[size], mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

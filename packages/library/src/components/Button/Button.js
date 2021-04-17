import React from 'react';
import PropTypes from 'prop-types';
import {useVariable} from 'css-vars-hook';
import * as classes from './Button.module.css';

export const Button = ({label, variant, ...props}) => {
  const buttonColor = {
    primary: 'blue',
    secondary: 'gray',
    danger: 'red',
  }[variant];
  const {setRef, style} = useVariable('color', buttonColor);
  return (
    <button
      style={style}
      ref={setRef}
      type="button"
      className={classes.button}
      {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
};

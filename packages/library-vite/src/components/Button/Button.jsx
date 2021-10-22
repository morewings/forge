import React from 'react';
import PropTypes from 'prop-types';
import {useVariable} from 'css-vars-hook';
import classes from './Button.module.css';

export const Button = ({label, variant = 'primary', ...restProps}) => {
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
      {...restProps}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

export default Button;

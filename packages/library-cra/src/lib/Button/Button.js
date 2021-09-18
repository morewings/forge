import React from 'react';
import PropTypes from 'prop-types';
import {useVariable} from 'css-vars-hook';
import {filterProps} from 'utils/filterProps';
import classes from './Button.module.css';

export const Button = ({children, variant, ...restProps}) => {
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
      {...filterProps(restProps)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
};

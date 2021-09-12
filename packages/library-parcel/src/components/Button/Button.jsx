import React from 'react';
import PropTypes from 'prop-types';
import {useVariable} from 'css-vars-hook';
import {filterProps} from '~/src/utils/filterProps';
import * as classes from './Button.module.css';

export const Button = ({label, variant, ...restProps}) => {
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
      {label} test
    </button>
  );
};

Button.propTypes = {
  /**
   Checks if the button should be disabled
   */
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
};

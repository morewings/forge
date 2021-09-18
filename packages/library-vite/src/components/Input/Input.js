import React from 'react';
import PropTypes from 'prop-types';
import {useVariable} from 'css-vars-hook';
import * as classes from './Input.module.css';

export const Input = ({state, value, type, ...restProps}) => {
  const inputColor = {
    pristine: 'blue',
    valid: 'green',
    error: 'red',
  }[state];
  const {setRef, style} = useVariable('color', inputColor);
  return (
    <input
      value={value}
      ref={setRef}
      style={style}
      className={classes.input}
      type={type}
      {...restProps}
    />
  );
};

Input.propTypes = {
  state: PropTypes.oneOf(['error', 'pristine', 'valid']),
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  state: 'pristine',
  type: 'text',
};

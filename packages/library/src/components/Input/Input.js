import React from 'react';
import PropTypes from 'prop-types';
import {useVariable} from 'css-vars-hook';
import * as classes from './Input.module.css';

export const Input = ({state, value, type, className, ...props}) => {
  const inputColor = {
    pristine: 'blue',
    valid: 'green',
    error: 'red',
  }[state];
  const {setRef, style} = useVariable('color', inputColor);
  return (
    <input
      ref={setRef}
      style={style}
      className={classes.input}
      type={type}
      {...props}
    />
  );
};

Input.propTypes = {
  state: PropTypes.oneOf(['error', 'pristine', 'valid']),
  type: PropTypes.oneOf(['text', 'number', 'file']),
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  state: 'pristine',
  type: 'text',
  className: '',
};

import React from 'react';
import PropTypes from 'prop-types';
import classes from 'lib/Header/Header.module.css';

export const Header = ({siteName}) => (
  <div className={classes.header}>{siteName}</div>
);

Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};

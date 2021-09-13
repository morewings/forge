import React from 'react';
import PropTypes from 'prop-types';
import * as classes from 'lib/Footer/Footer.module.css';

export const Footer = ({footerText}) => (
  <div className={classes.footer}>{footerText}</div>
);

Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
};

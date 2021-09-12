import React from 'react';
import {Header} from '~/src/components/Header';
import {Footer} from '~/src/components/Footer';
import {Button} from '~/src/components/Button';
import {Input} from '~/src/components/Input';
import * as classes from './App.module.css';

export const App = () => (
  <div className={classes.app}>
    <div className={classes.fragment}>
      <Header siteName="Library Demo" />
    </div>
    <div className={classes.fragment}>
      <Input
        type="number"
        value="Hello"
        onChange={() => {
          console.log('hello!');
        }}
      />
    </div>
    <div className={classes.fragment}>
      <Button variant="primary" label="Hello world!" />
    </div>
    <div className={classes.fragment}>
      <Footer footerText="Forge" />
    </div>
  </div>
);

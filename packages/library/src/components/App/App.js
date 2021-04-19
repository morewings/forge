import React from 'react';
import {Button} from '~/src/components/Button';
import {Input} from '~/src/components/Input';
import * as classes from './App.module.css';

export const App = () => (
  <div className={classes.test}>
    <div className={classes.fragment}>
      <Input
        className="lol"
        onChange={() => {
          console.log('hello!');
        }}
      />
    </div>
    <div className={classes.fragment}>
      <Button variant="primary" label="Hello world!" />
    </div>
  </div>
);

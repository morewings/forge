import React from 'react';
import imgURL from 'url:./img.png';
import {Button} from '~/src/components/Button';
import * as classes from './App.module.css';

export const App = () => (
  <div className={classes.test}>
    Test
    <img src={imgURL} alt="" />
    hello
    <div className={classes.child}>Child</div>
    <Button />
  </div>
);

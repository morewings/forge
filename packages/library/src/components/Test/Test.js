import React from "react";
import imgURL from 'url:./img.png'
import * as classes from './Test.module.css';

const Test = () => {
  return (
    <div className={classes.test}>
      Test
      <img src={imgURL} alt=""/>
      <div className={classes.child}>Child</div>
    </div>
  )
}

export default Test;

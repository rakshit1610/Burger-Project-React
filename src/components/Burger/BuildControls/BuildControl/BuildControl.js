import React from 'react';
import classes from './BuildControl.module.css';

const { checkPropTypes } = require("prop-types");

const buildControl=(props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
)

export default buildControl;
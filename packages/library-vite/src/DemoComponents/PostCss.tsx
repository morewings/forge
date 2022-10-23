import React, { FC } from 'react';
import classes from './postcss.module.css';

export const PostCss: FC = () => {
    return (
        <div className={classes.demo}>
            red <div className={classes.inside}>green</div>
        </div>
    );
};

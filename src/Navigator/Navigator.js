import React from 'react';
import * as classes from './Navigator.css';

const navigator = (props) => {
    return (
        <div className={classes.Navigator}>
            <a href="#">{props.children}</a>
        </div>
    );
}

export default navigator;

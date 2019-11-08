import React from 'react';
import * as classes from './Contact.css';

const contact = (props) => {
    return (
        <div className={classes.Contact}>
            {props.children}
        </div>
    );
}

export default contact;

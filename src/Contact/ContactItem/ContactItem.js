import React from 'react';
import * as classes from './ContactItem.css';
import Radium from 'radium';

const contactItem = (props) => {

    const style = {
        background: props.color,
        color: '#fff',
        ':hover': {
            color: props.hoverColor
        }
    }

    return (
        <div className={classes.ContactItem} style={style}>
            {props.children}
        </div>
    );
}

export default Radium(contactItem);

import React from 'react';
import * as classes from './NavbarItem.css';
import Radium from 'radium';

const navbarItem = (props) => {

    const style = {
        ':hover': {
            background: props.hoverColor
        }
    }

    return (
        <a className={classes.Link} href={props.takeMeTo} style={style}>
            <li className={classes.NavbarItem}>{props.children}</li>
        </a>
    );
}

export default Radium(navbarItem);




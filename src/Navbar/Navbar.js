import React from 'react';
import * as classes from './Navbar.css';

const navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <span>Portfolio</span></div>
                <ul className={classes.NavItems}>
                    <li className={classes.NavItem}><a className={classes.Link} href="#work">Work</a></li>
                    <li className={classes.NavItem}><a className={classes.Link} href="#skills">Skills</a></li>
                    <li className={classes.NavItem}><a className={classes.Link} href="#about">About</a></li>
                    <li className={classes.NavItem}><a className={classes.Link} href="#contact">Contact</a></li>
                </ul>
                <div className={classes.Hamberger}>
                    <div className={classes.Line}></div>
                    <div className={classes.Line}></div>
                    <div className={classes.Line}></div>
                </div>
            </nav>
        </div>
    );
}

export default navbar;
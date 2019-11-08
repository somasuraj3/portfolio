import React from 'react';
import * as classes from './Navbar.css';

const navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <span>Portfolio</span></div>
                <ul className={classes.NavItems}>
                    {props.children}
                    {/* <a className={classes.Link} href="#work">   <li className={classes.NavItem}>Work</li></a>
                    <a className={classes.Link} href="#skills"> <li className={classes.NavItem}>Skills</li></a>
                    <a className={classes.Link} href="#about">  <li className={classes.NavItem}>About</li></a>
                    <a className={classes.Link} href="#contact"><li className={classes.NavItem}>Contact</li></a> */}
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
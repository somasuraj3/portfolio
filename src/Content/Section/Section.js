import React from 'react'
import * as classes from './Section.css';

const section = (props) => {

    const style = {
        background: props.bgColor
    }

    return (
        <section id={props.sectionName} className={classes.Section} style={style}>
            {props.children}
        </section>
    );
}

export default section;

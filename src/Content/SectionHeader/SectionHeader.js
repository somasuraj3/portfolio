import React from 'react';
import * as classes from './SectionHeader.css';

const SectionHeader = (props) => {

    const style = {
        background: props.bgColor,
        color: props.textColor,
        backgroundBefore: props.bgColor
    }

    return (
        <section id={props.sectionName} className={classes.SectionHeader} style={style}>
            <h1>{props.children}</h1>
        </section>

    );
}

export default SectionHeader;

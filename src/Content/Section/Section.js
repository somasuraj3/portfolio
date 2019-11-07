import React from 'react'
import * as classes from './Section.css';

const section = (props) => {

    const style = {
        height: props.height + 'vh',
        background: props.bgColor
    }

    const labelStyle = {
        height: props.labelHeight + 'vh'
    }

    console.log(props.height);
    console.log(props.labelHeight);
    console.log(props.sectionName);

    return (
        <section id={props.sectionName} className={classes.Section} style={style}>
            <div className={classes.SectionLabel} style={labelStyle}>
                {props.children}
            </div>
            <div></div>
        </section>
    );
}

export default section;

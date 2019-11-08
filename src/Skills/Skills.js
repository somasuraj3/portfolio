import React from 'react';
import * as classes from './Skills.css';
import Skill from './Skill/Skill';

const skills = (props) => {

    return (
        <div className={classes.Skills}>
            {props.children}
        </div>
    );
}

export default skills;
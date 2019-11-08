import React from 'react';
import * as classes from './Skill.css';

const skill = (props) => {

    return (
        <div className={classes.Skill}>
            <span className={classes.SkillIcon} style={{ color: props.skillColor }}><i className={props.iconName}></i></span>
            <span className={classes.SkillName}>{props.skillName}</span>
            <span style={{ paddingLeft: '5px', fontSize: '20px', color: props.skillColor, float: "right", paddingTop: "10px" }}>{props.skillExpertise}%</span>
            <div className={classes.SkillExpertise} style={{ border: '1px solid ' + props.skillColor }}>
                <div className={classes.SkillPercentage} style={{ width: props.skillExpertise + "%", background: props.skillColor }}>

                </div>
            </div>
        </div>
    );
}

export default skill;
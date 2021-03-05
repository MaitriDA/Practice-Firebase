import React from 'react';
import './ProjectSummary.css';
const ProjectSummary = ({project}) => {
    return(
    <div className="projectSmmary">
        <div>{project.title}</div>
        <div>{project.content}</div>
        <p>Posted by Maitri Amin</p>
        <p className="date">05/03/2021</p>
    </div>
    )
}

export default ProjectSummary;
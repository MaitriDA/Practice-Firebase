import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList=()=>{
    return(
        <div className="Project-list">
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
        </div>
    )
}

export default ProjectList;
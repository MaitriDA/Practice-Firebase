import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList=({projects})=>{
    return(
        <div className="Project-list">
            {projects && projects.map(project=>{
                return(
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}
        </div>
    )
}

export default ProjectList;
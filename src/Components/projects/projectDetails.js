import React from 'react'

/**
* @author
* @function ProjectDetails
**/

const ProjectDetails = (props) => {

    const id=props.match.params.id;
    return (
        <div className="project-details">
            <div className="card">
                <div className="cardContent">
                    <span className="cardTitle">Project Title- {id}</span>
                    <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                </div>
                <div className="card-action">
                    <div>Posted by Maitri Amin</div>
                    <div>05/03/2021</div>
                </div>
            </div>
        </div>
    )

}

export default ProjectDetails;
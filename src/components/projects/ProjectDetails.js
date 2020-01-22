import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="cotainer section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et sodales arcu,
                        nec scelerisque nibh. Aliquam pulvinar ligula a nisi porttitor, et cursus
                        quam porttitor. Aliquam euismod lacinia purus eu tempus. Nunc semper 
                        fringilla tortor eu ornare. Curabitur imperdiet consequat libero eu 
                        scelerisque. Fusce tincidunt ipsum enim, ut malesuada lorem condimentum id. 
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by: Maverick</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;

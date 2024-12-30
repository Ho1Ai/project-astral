import { Link } from "react-router-dom"

const ProjectsListInstance = (properties) => {
    return (
        <Link className="projectsListInstance" to={{pathname: properties.link}}>
            <h3>
                {properties.name}
            </h3>
        </Link>
    )
}

export default ProjectsListInstance
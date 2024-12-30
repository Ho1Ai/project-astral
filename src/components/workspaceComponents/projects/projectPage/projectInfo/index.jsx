import './index.css'
import ProjectDescription from './description'
import ProjectMembers from './members'
import ProjectLinks from './links'

const ProjectInfo = (properties) => {
    console.log(properties)
    return (
        <section className="projectInfoSection">
            <ProjectDescription name={properties.name} description={properties.description} />
            <ProjectMembers authorTeam={properties.authorTeam} authorsList={properties.authorsList}/>
            <ProjectLinks projectLinksArray={properties.projectLinksArray} />
        </section>
    )
}

export default ProjectInfo
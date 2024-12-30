import { useState } from "react"
import WorkspaceHeader from "../../../components/workspaceComponents/workspaceHeader"
import ProjectInfo from "../../../components/workspaceComponents/projects/projectPage/projectInfo"

const ProjectMainPage = () => {
    let projectInfo = {
        //It is just a project page. I'm gonna take everything from API
        name: `Project Astral`,
        projectLinksArray: [
            {
                name: `GitHub`,
                link: `https://github.com/Ho1Ai/project-astral`
            }
            
        ],
        description: `Project Astral - application for developers and their projects. Our main purpose is to create an application which can be used for free. You can make forks: it is open source. You can find everything (except backend) on GitHub. You can share your ideas on our Discord server. Together we can make good projects! We (especially me, Ho1Ai) wish you all the best. Good luck, y'all!`,
        authorTeam: `Morlix Team`, //IDK what to do if it is empty... Maybe I'll replace it on "team of independent developers" or "independent developers"... or maybe this field will be required... well, I don't know
        authorsList: [`Ho1Ai`] //Yeah, I am the only developer at the moment... Well, I have a question: y am I speaking English in this component, but in "ProjectToDoList" I speak Russian?.. I don't know... Never mind
    }

    let [listOfToDo, setListOfToDo] = useState([
        {
            name: `Make Application`,
            state: 1 // states: 1 (blue) - Not Started; 2 (yellow) - in process; 3 (green) - ready; 4 (gray) - freezed
        }
    ]) //also gonna take everything from server, but it will be placed in another array, cuz I wanna change it on clients side

    return (<>
        <WorkspaceHeader />

        <ProjectInfo name={projectInfo.name} 
        description={projectInfo.description} 
        projectLinksArray={projectInfo.projectLinksArray} 
        authorTeam={projectInfo.authorTeam} 
        authorsList={projectInfo.authorsList} />    
    </>)
}

export default ProjectMainPage
import { useState } from "react"

import ProjectsListInstance from "./projectsListInstance"

import './index.css'

const ProjectsList = () => {
    let [projectsInfoList, setProjectsInfoList] = useState([
        {
        name: 'Project Astral',
        link: '/indev/projects/projectInfo', //it is in development. Now it will open project page just using link, but in the end it will use projects name
    }
])

    return (
        <section className="projectsList">
            { 
                projectsInfoList ? projectsInfoList.map((value, index) => { 
                    return(
                        <ProjectsListInstance key={index} name={value.name} link={value.link}/>
                    )
                }) : //<p>There is no projects yet, but, we hope, they will appear here soon :D</p>
                console.log('no projects yet. Leaving projects list with no instances')
            }      
        </section>
    )
}

export default ProjectsList
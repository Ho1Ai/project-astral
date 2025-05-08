import { useState, useEffect } from "react"
import axios from "axios"

import ProjectsListInstance from "./projectsListInstance"

import './index.css'

const ProjectsList = () => {
    let user = "Ho1Ai" //cork
    let [projectsInfoList, setProjectsInfoList] = useState([
        {
        name: 'Project Astral',
        link: '/indev/projects/projectInfo', //it is in development. Now it will open project page just using link, but in the end it will use projects name
        "project-name":"project-astral"
    }
])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/projects/get-available-projects?username=${user}`).then(res => setProjectsInfoList(res.data))
    }, [])

    const createProject = () => {
        setProjectsInfoList((old) => {
            return([...old, {name: 'test',link: 'test'}])
        })      
    }

    return (
        <section className="projectsList">
            <button onClick={createProject}></button>
            { 
                projectsInfoList ? projectsInfoList.map((value, index) => { 
                    console.log(value)
                    console.log(Object.keys(projectsInfoList))
                    return(
                        <ProjectsListInstance key={index} name={value.name} link={value.project_link}/>
                    )
                }) : //<p>There is no projects yet, but, we hope, they will appear here soon :D</p>
                console.log('no projects yet. Leaving projects list with no instances')
            }      
        </section>
    )
}

export default ProjectsList

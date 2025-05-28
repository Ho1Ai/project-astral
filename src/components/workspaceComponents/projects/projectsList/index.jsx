import { useState, useEffect } from "react"
import axios from "axios"

import ProjectsListInstance from "./projectsListInstance"
import CreateProjectModal from "../createProjectModalWindow"

import './index.css'

const ProjectsList = () => {

    
    //variable declaration

    let user = "Ho1Ai" //cork
    let [projectsInfoList, setProjectsInfoList] = useState([
        {
            name: 'Project Astral',
            proj_link: '/app/projects/projectInfo?project-astral', //it is in development. Now it will open project page just using link, but in the end it will use projects name
            "project-name":"project-astral"
        }
    ])
    let [modalWindowState, setModalWindowState] = useState(false)



    // SPECIAL: input handlers
    
    let [newProjName, newProjNameHandler] = useState('')
    let [newProjDesc, newProjDescHandler] = useState('')
    let [newProjTeam, newProjTeamHandler] = useState('')
    let [newProjGH, newProjGHHandler] = useState('')
    let [newProjYT, newProjYTHandler] = useState('')
    let [newProjWS, newProjWSHandler] = useState('')
    let [newProjPatreon, newProjPatreonHandler] = useState('')

    
    // SPECIAL 2: errors visibility status

    let [newProj_nameErrVisible, setNameErrVisible] = useState(false)
    let [newProj_teamErrVisible, setTeamErrVisible] = useState(false)


    //fetching data from API 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/projects/get-available-projects?username=${user}`).then((res) => {setProjectsInfoList(res.data); console.log(res.data)})
    }, [])



    //basic functions

    let errors = false

    const createProject = () => {
        if(newProjName == ''){
            setNameErrVisible(true)
            errors = true
        } else {
            setNameErrVisible(false)
            errors = false
        }

        // console.log(newProjName == '')

        if(newProjTeam == '') {
            setTeamErrVisible(true)
            errors = true
        } else {
            setTeamErrVisible(false)
            errors = false
        }

        // if(newProj_nameErrVisible == false && newProj_teamErrVisible == false) {
        if(errors == false) {
            axios.post('http://localhost:8000/api/projects/create-new-project', {
                name: newProjName,
                description: newProjDesc,
                authorTeam: newProjTeam,
                authorsList: [], //it will stay empty at the moment
                link: newProjName.toLocaleLowerCase().replace(' ', '-').replace('_','-') // two-step swap
                /*projectLinks: {
                    'GitHub': newProjGH?newProjGH:null,
                    'YouTube':newProjYT?newProjYT:null,
                    'WebSite':newProjWS?newProjWS:null, //not a good idea. I have an idea how to make it a lil bit more complex, but not now...
                    'Patreon':newProjPatreon?newProjPatreon:null
                }*/
            }).then(res => {setProjectsInfoList(res.data)
                console.log(res)
            })
        }

        // setProjectsInfoList((old) => {
        //     return([...old, {name: 'test',project_link: 'test'}])
        // })      
    }

    const openCreateProjForm = () => setModalWindowState(true)

    const closeProjCreationForm = () => setModalWindowState(false)

    return (
        <section className="projectsList">
            {modalWindowState && <CreateProjectModal 
            newProjNameOK = {newProj_nameErrVisible}
            newProjTeamOK = {newProj_teamErrVisible}

            projName = {[newProjName, newProjNameHandler]}
            projDesc = {[newProjDesc, newProjDescHandler]}
            projTeam = {[newProjTeam, newProjTeamHandler]}
            projGH = {[newProjGH, newProjGHHandler]}
            projYT = {[newProjYT, newProjYTHandler]}
            projWS = {[newProjWS, newProjWSHandler]}
            projPatreon = {[newProjPatreon, newProjPatreonHandler]}

            closeWindow = {closeProjCreationForm}
            createNewProj = {createProject}/>}

            <button onClick={openCreateProjForm} disabled={modalWindowState} className="innerPLP_appendProjButton">Create New Project</button>
            {/* PLP = Project List Page */}
            { 
                projectsInfoList ? projectsInfoList.map((value, index) => { 
                    // console.log(value)
                    // console.log(Object.keys(projectsInfoList))
                    return(
                        <ProjectsListInstance key={index} name={value.name} link={value.proj_link}/>
                    )
                }) : //<p>There is no projects yet, but, we hope, they will appear here soon :D</p>
                console.log('no projects yet. Leaving projects list with no instances')
            }      
        </section>
    )
}

export default ProjectsList

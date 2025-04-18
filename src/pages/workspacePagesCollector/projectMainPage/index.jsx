import { useState } from "react"
import WorkspaceHeader from "../../../components/workspaceComponents/workspaceHeader"
import ProjectInfo from "../../../components/workspaceComponents/projects/projectPage/projectInfo"
import ProjectToDoList from "../../../components/workspaceComponents/projects/projectPage/toDo"
import CommentsList from "../../../components/workspaceComponents/projects/projectPage/emeryComments"

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
            name: `Make an Application`,
            state: 1 // states: 1 (blue) - Not Started; 2 (yellow) - in process; 3 (green) - ready; 4 (gray) - freezed
        },{
            name: `Build a Project`,
            state: 1 // states: 1 (blue) - Not Started; 2 (yellow) - in process; 3 (green) - ready; 4 (gray) - freezed
        },{
            name: `Deploy a Project`,
            state: 1 // states: 1 (red) - Not Started; 2 (yellow) - in process; 3 (green) - ready; 4 (gray) - freezed
        }
    ]) //also gonna take everything from server, but it will be placed in another array, cuz I wanna change it on clients side

    const changeToDoListChildStatus = (onChangeIndex, to) => {
        setListOfToDo((oldList)=>{
            const rewriter = oldList.map((value, index) => {
                if(index == onChangeIndex){
                    return({name: value.name, state: to})
                } else {
                    return({name: value.name, state: value.state})
                }
            })
            console.log(rewriter)
            return(rewriter)
            
        })
    } 

    const removeToDoListChild = (onRemoveIndex) => {
        setListOfToDo((oldList) => {
            const rewriter = oldList.map((value, index) => {
                if(index == onRemoveIndex){
                    return({name: value.name, state: 5}) // 5 is for removed elements
                } else {
                    return({name: value.name, state: value.state})
                }
            })
            console.log(rewriter)
            return(rewriter)
        })
    }

    let commentsList = [{
        name: "Ho1Ai",
        comment: "Дыня камень отец"
    },{
        name: "test",
        comment: "test"
    }]

    let [newToDoText, setNewToDoText] = useState('')

    const appendToDo = () => {
        setListOfToDo((old) => {
            let test = [...old, {name: newToDoText, state: 1}];
            return test;
        })
    }

    const handleNewToDoNameChange = (e) => {
        setNewToDoText(e.target.value)
        console.log(newToDoText)
    }

    return (<>
        <WorkspaceHeader />

        <ProjectInfo name={projectInfo.name} 
        description={projectInfo.description} 
        projectLinksArray={projectInfo.projectLinksArray} 
        authorTeam={projectInfo.authorTeam} 
        authorsList={projectInfo.authorsList} />

        <ProjectToDoList rmStatus = {removeToDoListChild} appendToDo = {appendToDo} handleNewToDoNameChange = {handleNewToDoNameChange} toDoListContent = {listOfToDo} changeStatus = {changeToDoListChildStatus}/>

        {/* дальше создать здесь docs с помощью Amber */}

        {/* комментарии */}

        <CommentsList list = {commentsList}/>
    </>)
}

export default ProjectMainPage
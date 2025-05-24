import { useState, useEffect } from "react"
import WorkspaceHeader from "../../../components/workspaceComponents/workspaceHeader"
import ProjectInfo from "../../../components/workspaceComponents/projects/projectPage/projectInfo"
import ProjectToDoList from "../../../components/workspaceComponents/projects/projectPage/toDo"
import CommentsList from "../../../components/workspaceComponents/projects/projectPage/emeryComments"
import axios from "axios"
import { useSearchParams } from "react-router-dom"

const ProjectMainPage = () => {
    let [searchParams] = useSearchParams();
    let projectName = searchParams.get('name') 
    console.log(projectName)
    // let projectInfo = {
    //     //It is just a project page. I'm gonna take everything from API
    //     name: `Project Astral`,
    //     projectLinksArray: [
    //         {
    //             name: `GitHub`,
    //             link: `https://github.com/Ho1Ai/project-astral`
    //         }
            
    //     ],
    //     description: `Project Astral - application for developers and their projects. Our main purpose is to create an application which can be used for free. You can make forks: it is open source. You can find everything (except backend) on GitHub. You can share your ideas on our Discord server. Together we can make good projects! We (especially me, Ho1Ai) wish you all the best. Good luck, y'all!`,
    //     authorTeam: `Collapse Open-Source Team`, //IDK what to do if it is empty... Maybe I'll replace it on "team of independent developers" or "independent developers"... or maybe this field will be required... well, I don't know
    //     authorsList: [`Ho1Ai`] //Yeah, I am the only developer at the moment... Well, I have a question: y am I speaking English in this component, but in "ProjectToDoList" I speak Russian?.. I don't know... Never mind       // Update on 2025/05/08: forgot to say that we have a small team at the moment
    // }

    let [projectInformationContainer, setProjectInformationContainer] = useState({project_main_info:[{name:'', description:'', authorTeam: '', authorsList: [''], projectLinksArray: [{name:'', link:''}]}]})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/projects/get-project-info?project_name=${projectName}`).then(res => setProjectInformationContainer(res.data))
        console.log(projectName)
    }, [])    

    // let [listOfToDo, setListOfToDo] = useState([
    //     {
    //         name: `Make an Application`,
    //         state: 1 // states: 1 (blue) - Not Started; 2 (yellow) - in process; 3 (green) - ready; 4 (gray) - freezed
    //     },{
    //         name: `Build a Project`,
    //         state: 1 // states: 1 (blue) - Not Started; 2 (yellow) - in process; 3 (green) - ready; 4 (gray) - freezed
    //     },{
    //         name: `Deploy a Project`,
    //         state: 1 // states: 1 (red) - Not Started; 2 (yellow) - in process; 3 (green) - ready; 4 (gray) - freezed
    //     }
    // ]) //also gonna take everything from server, but it will be placed in another array, cuz I wanna change it on clients side

    const updateTDL = (new_TDL_data) => {
        // setProjectInformationContainer((old) => {
        //     console.log(old)
        // })
        console.log(new_TDL_data, projectInformationContainer)
        setProjectInformationContainer((old) => {
            console.log(old.to_do_list)            
            return {
                project_main_info: old.project_main_info, 
                to_do_list: new_TDL_data.new_TDL
            }
        })
    }

    const changeToDoListChildStatus = (targetId, onChangeIndex, to) => {
        // setListOfToDo((oldList)=>{
        //     const rewriter = oldList.map((value, index) => {
        //         if(index == onChangeIndex){
        //             return({id: value.name, name: value.name, state: to})
        //         } else {
        //             return({id: value.name, name: value.name, state: value.state})
        //         }
        //     })
        //     console.log(rewriter)
        //     return(rewriter)
            
        // })

        // console.log('пенис жопа вазелин', targetId, typeof(targetId), to, typeof(to))
        
        axios.put('http://localhost:8000/api/projects/update-todo', {
            'id': targetId,
            'name': 'default',
            'state': to
        }, {
            headers: {
                "Content-Type":"application/json"
            }
        }).then(response => {
            updateTDL(response.data)
        })

        
    } 

    const removeToDoListChild = (onRemoveIndex) => {
        // setListOfToDo((oldList) => {
        //     const rewriter = oldList.map((value, index) => {
        //         if(index == onRemoveIndex){
        //             return({name: value.name, state: 5}) // 5 is for removed elements
        //         } else {
        //             return({name: value.name, state: value.state})
        //         }
        //     })
        //     console.log(rewriter)
        //     return(rewriter)
        // })
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
        // setListOfToDo((old) => {
        //     let test = [...old, {name: newToDoText, state: 1}];
        //     return test;
        // })

        console.log('new to do:', newToDoText, typeof(newToDoText))

        if(newToDoText==""){
            alert(`to do list can't keep empty strings`)
            return
        }

        if(typeof(newToDoText) !== "string"){
            alert(`to do list can keep only that entities, which are named with text. It means: \n1. You can't keep numbers;\n2.You can't keep empty string`) 
            return //once I've received this exception, so now I don't wanna have any problems with this stuff
        }

        axios.post('http://localhost:8000/api/projects/append-todo', {
            name: newToDoText,
            state: 1
        }).then((response) => {updateTDL(response.data)})

        setNewToDoText('')
    }

    const handleNewToDoNameChange = (e) => {
        setNewToDoText(e.target.value)
        console.log(newToDoText)
    }

    // const updateToDoState = async(targetId, newState) => {
    //      axios.put(`http://localhost:8000/api/projects/update-todo`, {
    //         "id": targetId,
    //         "name": "default",
    //         "new_state": newState
    //      }) // temp solution // yeah, now there is no need in this piece of code
    // }

    // console.log("project information container goes here: ", projectInformationContainer)

    return (<>
        <WorkspaceHeader />

        <ProjectInfo name={projectInformationContainer.project_main_info[0].name} 
        description={projectInformationContainer.project_main_info[0].description} 
        projectLinksArray={projectInformationContainer.project_main_info[0].projectLinksArray} 
        authorTeam={projectInformationContainer.project_main_info[0].authorTeam} 
        authorsList={projectInformationContainer.project_main_info[0].authorsList} />

        <ProjectToDoList rmStatus = {removeToDoListChild} 
        input_value = {newToDoText}  
        appendToDo = {appendToDo} 
        /*updateToDoState = {updateToDoState}*/ 
        handleNewToDoNameChange = {handleNewToDoNameChange} 
        toDoListContent = {projectInformationContainer.to_do_list} 
        changeStatus = {changeToDoListChildStatus}/>

        {/* дальше создать здесь docs с помощью Amber */}

        {/* комментарии */}

        {/* at the moment there is no need in comments. Btw, now I use English */}

        {/* <CommentsList list = {commentsList}/> */}
    </>)
}

export default ProjectMainPage
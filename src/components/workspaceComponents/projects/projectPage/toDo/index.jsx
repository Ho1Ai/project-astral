import { useState } from 'react'
import './index.css'

const ProjectToDoList = (properties) => {
    // const changeStatus = (index) => {
    //     properties.changeStatus(index)
    // }

    // расположить здесь to do list. У каждого to do list instance есть state, который будет относить его к одному из 4 списком: Not Started, In Progress, Ready, Freezed. Да, это уже было в комментарии в компоненте project main page, но это тебе, Ho1Ai (опять с собой говорю), если ты опять забросишь этот проект... 
    return (
        <section className="toDoListSection">
            <div className='toDoListWrapper'>
                <div className="toDoListSectionContentContainer notStartedContainer">
                    <header className="toDoListSectionContentContainersHeader">                    
                        <h1 className='toDoListSectionContentTitle'>
                            Not Started
                        </h1>
                    </header>

                    <div className='listOfToDos'> {/* список через ul создает отступ слева. Разбираться с этим нет особого желания */}
                        {   
                            properties.toDoListContent ? properties.toDoListContent.map((value, index) => {
                                if (value.state==1) return(
                                    /*<li key={index}>{value.name}</li>*/
                                    <li key={index}>
                                        <div className='toDoListSectionContentEachContainer' style={{ borderTop: "2px solid black"}}>
                                            <h1 style={{margin:0}}>
                                                {value.name}
                                            </h1>
                                            <button onClick={() => {
                                                properties.changeStatus(index, 2)}
                                            }>change status ("In Progress")</button>
                                        </div>
                                    </li>
                                )
                            }):console.log('empty list')
                        }
                    </div>
                </div>
            
                <div className="toDoListSectionContentContainer inProgressContent">
                    <header className="toDoListSectionContentContainersHeader">
                        <h1 className='toDoListSectionContentTitle'>
                            In Progress
                        </h1>
                    </header>
                        
                    <div className="listOfToDos inprogress">
                    {   
                            properties.toDoListContent ? properties.toDoListContent.map((value, index) => {
                                if (value.state==2) return(
                                    /*<li key={index}>{value.name}</li>*/
                                    <li key={index}>
                                        <div className='toDoListSectionContentEachContainer' style={{ borderTop: "2px solid black"}}>
                                            <h1 style={{margin:0}}>
                                                {value.name}
                                            </h1>
                                            <button onClick={() => {
                                                properties.changeStatus(index, 3)}
                                            }>change status ("Ready")</button>
                                        </div>
                                    </li>
                                )
                            }):console.log('empty list')
                        }
                    </div>
                </div>
            
                <div className="toDoListSectionContentContainer readyContent">
                    <header className="toDoListSectionContentContainersHeader">
                        <h1 className='toDoListSectionContentTitle'>
                            Ready
                        </h1>
                    </header>

                    <div className="listOfToDos ready">
                    {   
                            properties.toDoListContent ? properties.toDoListContent.map((value, index) => {
                                if (value.state==3) return(
                                    /*<li key={index}>{value.name}</li>*/
                                    <li key={index}>
                                        <div className='toDoListSectionContentEachContainer' style={{ borderTop: "2px solid black"}}>
                                            <h1 style={{margin:0}}>
                                                {value.name}
                                            </h1>
                                            <button onClick={() => {
                                                properties.rmStatus(index)}
                                            }>Remove from list</button>
                                        </div>
                                    </li>
                                )
                            }):console.log('empty list')
                        }
                    </div>
                </div>
            
                <div className="toDoListSectionContentContainer freezedContent">
                    <header>
                        <h1 className='toDoListSectionContentTitle'>
                            Freezed
                        </h1>
                    </header>
                </div>
            </div>
        </section>    
    )
}

export default ProjectToDoList
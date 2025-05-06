import { useState } from 'react'
import './index.css'


//very hard to explain why did I place all headers here... never mind

const ProjectToDoList = (properties) => {
    // const changeStatus = (index) => {
    //     properties.changeStatus(index)
    // }

    // расположить здесь to do list. У каждого to do list instance есть state, который будет относить его к одному из 4 списком: Not Started, In Progress, Ready, Freezed. Да, это уже было в комментарии в компоненте project main page, но это тебе, Ho1Ai (опять с собой говорю), если ты опять забросишь этот проект... 
    return (
        <section className="toDoListSection">
            <div className="toDoAppender">
                <input type="text" className="appendToDo" onChange={properties.handleNewToDoNameChange}/>
                <button className='confirmToDoAppending' onClick={properties.appendToDo}>+</button>
            </div>
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
                                            <div className="innerTDL_ContentPart">
                                                <h1 style={{margin:0}}>
                                                    {value.name}
                                                </h1>

                                            </div>
                                            <div className='innerTDL__ControlButtonsContainer '>
                                                <button onClick={() => {
                                                        properties.changeStatus(index, 4)}          
                                                } className='innerTDL_ControlButtonFreezed innerTDL_ControlButtons'>X</button>
                                                <button onClick={() => {
                                                    properties.changeStatus(index, 2)}
                                                } className='innerTDL_ControlButtons innerTDL_ControlButtonInProgress '>→</button>
                                                <button onClick={() => {
                                                    properties.updateToDoState(index, 3)}
                                                    
                                                } className='innerTDL_ControlButtonReady innerTDL_ControlButtons'>✓</button>
                                            </div>
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
                    <div className='listOfToDos'> {/* список через ul создает отступ слева. Разбираться с этим нет особого желания */}
                        {   
                            properties.toDoListContent ? properties.toDoListContent.map((value, index) => {
                                if (value.state==4) return(
                                    /*<li key={index}>{value.name}</li>*/
                                    <li key={index}>
                                        <div className='toDoListSectionContentEachContainer' style={{ borderTop: "2px solid black"}}>
                                            <div className="innerTDL_ContentPart">
                                                <h1 style={{margin:0}}>
                                                    {value.name}
                                                </h1>

                                            </div>
                                            <div className='innerTDL__ControlButtonsContainer '>
                                                <button onClick={() => {
                                                        properties.changeStatus(index, 1)}          
                                                } className='innerTDL_ControlButtonNSt innerTDL_ControlButtons'>←</button>
                                                <button onClick={() => {
                                                    properties.changeStatus(index, 2)}
                                                } className='innerTDL_ControlButtons innerTDL_ControlButtonInProgress '>→</button>
                                                <button onClick={() => {
                                                    properties.changeStatus(index, 3)}
                                                    
                                                } className='innerTDL_ControlButtonReady innerTDL_ControlButtons'>✓</button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }):console.log('empty list')
                        }
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default ProjectToDoList
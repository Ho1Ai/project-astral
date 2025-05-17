import { useState } from 'react'
import './index.css'

const CreateProjectModal = (properties) => {
    //this page does not work as separated part of this application (so you can't act with it using localhost:5173/tests/modal)

    let [linksCount, setLinksCount] = useState([])

    // console.log(typeof(properties.projName[0]), properties.projName[0])

    return (
        <div className='innerPLP_createProjModalWindow'> 

            {/* I don't need this headache with forms at the moment. Buttons are just sending/submitting this form so I don't wanna fix this stuff at the moment. It won't be a problem... if I had no close buttons (it thinks I need to send/submit it) */}

            <div className="innerPLP_headerContainer">
                <h2>
                    Create New Project
                </h2>
                
                <button onClick={() => {properties.closeWindow()}} className='innerPLP_closeModalWindow'>X</button>
            </div>            
            
            <p>
                Project Name:
            </p>
            <input onChange={(event)=>properties.projName[1](event.target.value)} value={properties.projName[0]} required placeholder='e.g. Project Astral' type="text" name='project_name' className='innerPLP_createProjInput_projName innerPLP_createProjInput' /> {/* I don't even know what first classname was supposed to do, btw */}
            
            {properties.newProjNameOK && <p style={{color: '#f00', fontSize: '12px'}}>This field is required</p>}

            <p>
                Description (Not required):
            </p>
            <textarea style={{resize:"vertical"}} onChange={(event)=>properties.projDesc[1](event.target.value)} value={properties.projDesc[0]} placeholder='Place here some info about your project. For example, you can place main purpose of your project' type="text" className='innerPLP_createProjInput'/>

            <p>
                Author Team (Or author's name):
            </p>
            <input required type="text" value={properties.projTeam[0]} onChange={event => properties.projTeam[1](event.target.value)} placeholder='e.g. Collapse Open-Source Team' className='innerPLP_createProjInput' />

            {properties.newProjTeamOK && <p style={{color: '#f00', fontSize: '12px'}}>This field is required</p>}

            {/* <p>
                Authors List:
            </p>

            <div>
                <button>Add </button>
            </div> {/* not gonna use it at the moment }*/}

            <p style={{marginTop: "70px"}}> {/* margin is the easiest way to make this stuff. I don't wanna make it very complex and wanna keep it simple and stupid (KISS) */}
                Links (Not required):
            </p>
            <p>
                GitHub:
            </p>
            <input onChange={event => properties.projGH[1](event.target.value)} value={properties.projGH[0]} type="text" placeholder='e.g. https://github.com/Ho1Ai/project-astral' className='innerPLP_createProjInput' />

            <p>
                YouTube:
            </p>
            <input type="text" onChange={event => properties.projYT[1](event.target.value)} value={properties.projYT[0]} placeholder='e.g. https://youtube.com/...' className='innerPLP_createProjInput' />

            <p>
                Project web site:
            </p>
            <input type="text" onChange={event => properties.projWS[1](event.target.value)} value={properties.projWS[0]} placeholder='e.g. https://project-astral.org/' className='innerPLP_createProjInput' />


            <p>
                Patreon:
            </p>
            <input type="text" onChange={event => properties.projPatreon[1](event.target.value)} value={properties.projPatreon[0]} placeholder='e.g. https://patreon.com/...' className='innerPLP_createProjInput innerPLP_projectLinks' />
            
            <button onClick={properties.createNewProj} className='innerPLP_createProjButton'>Create</button>
        </div>
    )
}

export default CreateProjectModal
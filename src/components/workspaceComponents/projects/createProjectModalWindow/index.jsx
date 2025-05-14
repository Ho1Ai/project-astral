import { useState } from 'react'
import './index.css'

const CreateProjectModal = (properties) => {
    let [linksCount, setLinksCount] = useState([])
    return (
        <form className='innerPLP_createProjModalWindow' action="#"> 

            <div className="innerPLP_headerContainer">
                <h2>
                    Create New Project
                </h2>
                
                <button className='innerPLP_closeModalWindow'>X</button>
            </div>            
            
            <p>
                Project Name:
            </p>
            <input required placeholder='e.g. Project Astral' type="text" name='project_name' className='innerPLP_createProjInput_projName innerPLP_createProjInput' /> {/* I don't even know what first classname was supposed to do, btw */}
            
            <p>
                Description:
            </p>
            <textarea style={{resize:"vertical"}} placeholder='Place here some info about your project. For example, you can place main purpose of your project' type="text" className='innerPLP_createProjInput'/>

            <p>
                Author Team:
            </p>
            <input type="text" placeholder='e.g. Collapse Open-Source Team' className='innerPLP_createProjInput' />

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
            <input type="text" placeholder='e.g. https://github.com/Ho1Ai/project-astral' className='innerPLP_createProjInput' />

            <p>
                YouTube:
            </p>
            <input type="text" placeholder='e.g. https://youtube.com/...' className='innerPLP_createProjInput' />

            <p>
                Project web site:
            </p>
            <input type="text" placeholder='e.g. https://project-astral.org/' className='innerPLP_createProjInput' />


            <p>
                Patreon:
            </p>
            <input type="text" placeholder='e.g. https://patreon.com/...' className='innerPLP_createProjInput innerPLP_projectLinks' />
            
            <button className='innerPLP_createProjButton'>Create</button>
        </form>
    )
}

export default CreateProjectModal
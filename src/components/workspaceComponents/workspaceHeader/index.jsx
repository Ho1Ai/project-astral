import './index.css'
import { Link } from 'react-router-dom'

const WorkspaceHeader = () => {
    return(
        <header className='profileHeader'>
            <h1>
                Project Astral
            </h1>

            <nav className='headerNavigationBlock'>
                <Link to={{pathname:'/indev/projects'}} className='headerLink'>My Projects</Link>
                <Link to={{pathname:'/indev/notes'}} className='headerLink'>Notes</Link>
                <Link to={{pathname:'/indev'}} className='headerLink'>Profile</Link>
            </nav>
        </header>
    )
}

export default WorkspaceHeader
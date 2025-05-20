import './index.css'
import { Link } from 'react-router-dom'

const HeaderL = () => {
    return (
        <header className="headerLand">
            <h1 className='logoL'> {/* place logo here */}
                logo
            </h1>

            <nav className='navL'>
                <Link to={{pathname:"/About"}}>About</Link>
                <Link to={{pathname:"/OpenProjects"}}>Projects</Link>
                <a href="https://github.com/Ho1Ai/project-astral">GitHub</a>
                <Link to={{pathname:"/wiki"}}>Wiki</Link>
            </nav>

            <Link to={{pathname:"/signin"}}>
                <button className='loginButtonL'>
                    sign in
                </button>
            </Link>
        </header>
    )
}

export default HeaderL
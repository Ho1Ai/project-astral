import './index.css'
import { Link } from 'react-router-dom'

const FooterL = () => {
    return (
        <footer className='footerLand'>
            <nav className='navFL'>
                <a href="">About</a>
                <a href="">Projects</a>
                <Link to={{pathname:'//https://github.com/Ho1Ai/project-astral'}}>GitHub</Link>
                <a href="">Wiki</a>
            </nav>
        </footer>
    )
}

export default FooterL
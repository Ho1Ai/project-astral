import './index.css'

const HeaderL = () => {
    return (
        <header className="headerLand">
            <h1 className='logoL'> {/* place logo here */}
                logo
            </h1>

            <nav className='navL'>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">GitHub</a>
                <a href="">Wiki</a>
            </nav>

            <a href="/login">
                <button className='loginButtonL'>
                    sign in
                </button>
            </a>
        </header>
    )
}

export default HeaderL
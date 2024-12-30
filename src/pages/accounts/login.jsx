import './accs.css'

const LoginPage = () => {
    return(
    <div className='containerLog'>
        <form action='/indev'>
            <div className="formCont">
                <h1 className='logHeader'>
                    Sign In
                </h1>

                <div className="logInputContainer">
                    <h3>
                        Email / Username
                    </h3>

                    <input type="text" className='logPgMainInput'/>
                </div>


                <div className="logInputContainer">
                    <h3>
                        Password
                    </h3>

                    <input type="password" className='logPgMainInput'/>
                </div>

                {/* <a href="/indev" style={{height: "auto", width: 'auto'}}> */}
                    <button className='logPgMainButton'>Sign in</button>
                {/* </a> */}
            </div>


            <div style={{color: 'black', marginTop: '150px'}}>
                Haven't got account yet? <a href="/signup">Sign up for free!</a>
            </div>
        </form>

    </div>
    )
}

export default LoginPage
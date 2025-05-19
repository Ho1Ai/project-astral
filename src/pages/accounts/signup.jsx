import './accs.css'

import { useState, useEffect } from 'react'

const SignUpPage = () => {
    return(
        <div className='containerLog'>
            <form className="signInForm logForm" action="#">
                <div className="formCont">
                    <h1 className='logHeader'>
                        Sign In
                    </h1>

                    <div className="logInputContainer">
                        <h3>
                            Email
                        </h3>

                        <input type="text" className='logPgMainInput'/>

                        <h3>
                            Username
                        </h3>

                        <input type="text" className='logPgMainInput'/>
                    </div>


                    <div className="logInputContainer">
                        <h3>
                            Password
                        </h3>

                        <input type="password" className='logPgMainInput'/>

                        <h3>
                            Retype password
                        </h3>

                        <input type="password" className='logPgMainInput' />
                    </div>

                    {/* <a href="/indev" style={{height: "auto", width: 'auto'}}> */}
                        <button className='logPgMainButton'>Sign up</button>
                    {/* </a> */}
                </div>


                <div style={{color: 'black', marginTop: '150px'}}>
                    Already have an account? <a href="/login"> Sign in</a>
                </div>
            </form>
        </div>
    )
}

export default SignUpPage
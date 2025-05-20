import { Link } from 'react-router-dom'
import './accs.css'
import { useState } from 'react'
import axios from 'axios'

const SignPage = () => {
    let [IntoJWTWriter, setIntoJWTWriter] = useState({'access_jwt': '', 'refresh_jwt': ''})

    /*
        checking if there are a good refresh jwt token
        sign in form - write JWTs into localstorage (refresh token) and sessionstorage(access token) or may be both in localstorage   
        
    */

    return(
    <div className='containerLog'>
        <form action='#' className='logForm'>
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
                Haven't got account yet? <Link to={{pathname:"/signup"}}>Sign up for free!</Link>
            </div>
        </form>

    </div>
    )
}

export default SignPage
import { Link } from 'react-router-dom'
import './accs.css'
import { useState } from 'react'
import axios from 'axios'

const SignPage = () => {
    let [IntoJWTWriter, setIntoJWTWriter] = useState({'access_jwt': '', 'refresh_jwt': ''})

    /*
        checking if there are a good refresh jwt token
        sign in form - write JWTs into localstorage (refresh token) and sessionstorage(access token) or may be both in localstorage. In the nearest future make it httpCookie stuff, but not now...
    */


    //error
    let [error, setError] = useState('')

    //states list: password and email/username

    let [logName, handleLogName] = useState('')
    let [passwd, handlePasswd] = useState('')

    const signInSend = () => {
        setError('')

        if(passwd.length < 8 || passwd.length>32) {
            console.log(passwd.length)
            setError('Password length must be between 8 and 32')
            return
        }

        if(!logName) {
            setError('Email / Nickname field is required')
            return
        }

        axios.post('http://localhost:8000/api/accounts/user-login', {
            'log_name': logName,
            'passwd': passwd
        }).then(response=>{
            // console.log(response.data) // debug line
            if(response.data.status_code == 4) {
                setError('Password or Email / Nickname is invalid')
            } else if(response.data.status_code == 0) {
                let jwt_tokens = {
                    'jwt_access':response.data.access_JWT,
                    'jwt_refresh': response.data.refresh_JWT
                }

                let str_toks = JSON.stringify(jwt_tokens)
                // console.log(str_toks) // debug line
                // console.log(JSON.parse(str_toks)) //debug line
                localStorage.setItem('project-astral-tkkpv', str_toks) // tkkpv - ToKen KeePer Variable (chars which made this new word are capitals)
                window.location.href = 'indev'
            }
        })
    }

    return(
    <div className='containerLog'>
        <div action='#' className='logForm'>
            <div className="formCont">
                <h1 className='logHeader'>
                    Sign In
                </h1>

                <div className="logInputContainer">
                    <h3>
                        Email / Nickname
                    </h3>

                    <input type="text" onChange={(event)=>{handleLogName(event.target.value)}} className='logPgMainInput'/>
                </div>


                <div className="logInputContainer">
                    <h3>
                        Password
                    </h3>

                    <input type="password" onChange={(event)=>{handlePasswd(event.target.value)}} className='logPgMainInput'/>
                </div>

                {/* <a href="/indev" style={{height: "auto", width: 'auto'}}> */}
                    <button className='logPgMainButton' onClick={signInSend}>Sign in</button>
                {/* </a> */}
                {error && <p style={{color: '#f00'}}>{error}</p>}
            </div>


            <div style={{color: 'black', marginTop: '150px'}}>
                Haven't got account yet? <Link to={{pathname:"/signup"}}>Sign up for free!</Link>
            </div>
        </div>

    </div>
    )
}

export default SignPage
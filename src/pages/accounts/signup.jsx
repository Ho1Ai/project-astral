import './accs.css'

import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    // input handlers
    let [newUserEmail, handleNewUserEmail] = useState('')
    let [newUserNickname, handleNewUserNickname] = useState('')
    let [newUserPassword, handleNewUserPassword] = useState('')
    let [retypePassword, handleRetypePassword] = useState('')
    


    let [pass_ok, setPass_ok] = useState(true)
    let [error, setError] = useState('')

    let [accCreationStatus, setAccCreationStatus] = useState(false)

    const checkBotPasswd = (current_tester) => {
        if (newUserPassword!=current_tester && newUserPassword!='') {
            setPass_ok(false)
        } else {
            setPass_ok(true)
        }
    }

    const checkTopPasswd = (current_tester) => {
        if (retypePassword!=current_tester && retypePassword!='') {
            setPass_ok(false)
        } else {
            setPass_ok(true)
        }
        // console.log(newUserEmail.indexOf('@')) // debuger for email
    }


    
    const SubmitForm = () => {
        if(newUserEmail=='' || newUserNickname=='') {
            setError(`"Nickname" and "Email" fields are required`)
            return
        }

        if(newUserEmail.indexOf('@') == -1) {
            setError('Your email is invalid')
            return;
        }

        if(newUserEmail.indexOf("@")>newUserEmail.lastIndexOf('.')) {
            setError('Your email is invalid')
            return;
        }

        if (newUserPassword != retypePassword) {
            return;
        }

        if (newUserPassword.length<8) {
            setError('Password must contain at least 8 symbols')
            return;
        }

        if (newUserPassword.length>32) {
            setError("Password length can't be more than 32 symbols")
            return;
        }

        axios.post('http://localhost:8000/api/accounts/create-account', {
            'email': newUserEmail,
            'nickname': newUserNickname,
            'passwd': newUserPassword,
        }).then((response)=> {
            if(response.data.is_ok){
                setAccCreationStatus(true)
            } else {
                if(response.data.status_code == 5){
                    setError('The server has returned an error: there are a user with this nickname or email')
                }
            }
        })
    }



    return(
        <div className='containerLog'>
            <div className="signInForm logForm">
                <div className="formCont">
                    <h1 className='logHeader'>
                        Sign In
                    </h1>

                    <div className="logInputContainer">
                        <h3>
                            Email
                        </h3>

                        <input type="text" value={newUserEmail} onChange={(event) => {handleNewUserEmail(event.target.value)}} className='logPgMainInput'/>

                        <h3>
                            Nickname
                        </h3>

                        <input type="text" value = {newUserNickname} onChange = {(event)=>{handleNewUserNickname(event.target.value)}} className='logPgMainInput'/>
                    </div>


                    <div className="logInputContainer">
                        <h3>
                            Password
                        </h3>

                        <input type="password" value={newUserPassword} onChange={(event) => {handleNewUserPassword(event.target.value); checkTopPasswd({'pass':event.target.value})}} className='logPgMainInput'/>

                        <h3>
                            Retype password
                        </h3>

                        <input type="password" value={retypePassword} onChange={(event) => {handleRetypePassword(event.target.value); checkBotPasswd(event.target.value)}} className='logPgMainInput' />

                        {!pass_ok && <p style={{color:"#f00", fontSize:"12px"}}>passwords must be equal</p>}

                        {error && <p style={{color: '#f00', fontSize:"12px"}}>{error}</p>}
                    </div>

                    {/* <a href="/indev" style={{height: "auto", width: 'auto'}}> */}
                        <button className='logPgMainButton' onClick={SubmitForm}>Sign up</button>
                    {/* </a> */}
                    {accCreationStatus && <p style={{color: '#0a0', fontSize: '12px'}}>Succes! Now you can go to <Link to={{pathname:'/signin'}} className='reg__goToSignIn'>this</Link> page and sign in </p>}
                </div>


                <div style={{color: 'black', marginTop: '150px'}}>
                    Already have an account? <Link to={{pathname:"/signin"}}> Sign in</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
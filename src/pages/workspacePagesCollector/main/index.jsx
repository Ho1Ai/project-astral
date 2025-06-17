import WorkspaceHeader from "../../../components/workspaceComponents/workspaceHeader"
import ProfileBanner from "../../../components/workspaceComponents/profile/profileBanner"
import ProfileBlog from "../../../components/workspaceComponents/profile/profileBlog"
import { useState, useEffect } from "react"
import { data, useSearchParams } from "react-router-dom"
import axios from "axios"

// import dataGetter from './getUserDataFromLocalStorage.js'

const ApplicationProfilePage = () => {
    // let [userInfo,setUserInfo] = useState({uname:'default', description:'static output. Here I place some static content'})

    let [userInfo, setUserInfo] = useState({uname: '', description: ''})

    let [profilePageParamsGetter] = useSearchParams()
    let profilePageParams__id = profilePageParamsGetter.get('id')

    let [whichUser, setWhichUser] = useState({'id': ''})

    useEffect(()=>{
        let tokens = {jwt_access: JSON.parse(localStorage.getItem('project-astral-tkkpv-access')),
                        jwt_refresh: JSON.parse(localStorage.getItem('project-astral-tkkpv-refresh'))}

        if(profilePageParams__id) {
            axios.get(`http://localhost:8000/api/accounts/get-user-info?rtype=id&id=${profilePageParams__id}`).then((response) => {
                let resdata = response.data
                if (response.data.status_code == 0) {
                    setUserInfo({
                        uname: resdata.nickname,
                        description: resdata.description
                    })
                } else {
                    alert('An error occured while getting user data')
                }
            })
        } else if(tokens.jwt_refresh) {
            axios.get(`http://localhost:8000/api/accounts/get-user-info`, {
                params:{
                    'rtype': 'jwt'
                },
                headers: {
                    'X-JWT-Access': tokens.jwt_access,
                    'X-JWT-Refresh': tokens.jwt_refresh,
                }
            }).then((response)=> {
                // console.log(response.data);
                
                if (response.data['X-JWT-Access']) { // in the nearest future gonna place this stuff into headers, but not now... I am very busy now, so I don't have enough time to do it
                    tokens.jwt_access = JSON.stringify(response.data['X-JWT-Access']) // btw, I made this 'if' only for that case, if this token is not returned due to some errors
                    // console.log(tokens.jwt_access)
                    localStorage.setItem('project-astral-tkkpv-access', tokens.jwt_access)
                }

                if (response.data['X-JWT-Refresh']) {
                    tokens.jwt_refresh = JSON.stringify(response.data['X-JWT-Refresh'])
                    // console.log(tokens.jwt_refresh)
                    localStorage.setItem('project-astral-tkkpv-refresh', tokens.jwt_refresh)
                }

                // let tokens_str = JSON.stringify(tokens)
                // localStorage.setItem('project-astral-tkkpv', tokens_str)


                // console.log("refresh:", tokens.jwt_refresh)

                // if (tokens.jwt_refresh!=undefined){
                //     localStorage.setItem('project-astral-tkkpv-refresh', tokens.jwt_refresh)
                // }
                
                setUserInfo({
                    uname: response.data.nickname,
                    description: response.data.description
                })
            })
        } else {
            setUserInfo({uname: 'Error 8', description: 'You must sign in first!'})
        }
    },[])

    return(<> {/* собрать страницу для главной страницы (ей будет профиль) */}

        <WorkspaceHeader />

        <ProfileBanner name={userInfo.uname} description={userInfo.description} />

        <ProfileBlog />

    </>)
}

export default ApplicationProfilePage
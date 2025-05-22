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

    let tokens = JSON.parse(localStorage.getItem('project-astral-tkkpv'))

    useEffect(()=>{
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
        } else {
            axios.get(`http://localhost:8000/api/accounts/get-user-info`, {
                params:{
                    'rtype': 'jwt'
                },
                headers: {
                    'X-JWT-Access': tokens.jwt_access,
                    'X-JWT-Refresh': tokens.jwt_refresh,
                }
            }).then((response)=> {console.log(response.data)})
        }
    },[])

    return(<> {/* собрать страницу для главной страницы (ей будет профиль) */}

        <WorkspaceHeader />

        <ProfileBanner name={userInfo.uname} description={userInfo.description} />

        <ProfileBlog />

    </>)
}

export default ApplicationProfilePage
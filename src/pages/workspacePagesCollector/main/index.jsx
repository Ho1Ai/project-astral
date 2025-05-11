import WorkspaceHeader from "../../../components/workspaceComponents/workspaceHeader"
import ProfileBanner from "../../../components/workspaceComponents/profile/profileBanner"
import ProfileBlog from "../../../components/workspaceComponents/profile/profileBlog"
import { useState, useEffect } from "react"

const ApplicationProfilePage = () => {
    let [userInfo,setUserInfo] = useState({uname:'default', description:'static output. Here I place some static content'})

    return(<> {/* собрать страницу для главной страницы (ей будет профиль) */}

        <WorkspaceHeader />

        <ProfileBanner name={userInfo.uname} description={userInfo.description} />

        <ProfileBlog />

    </>)
}

export default ApplicationProfilePage
import WorkspaceHeader from "../../../components/workspaceComponents/workspaceHeader"
import ProfileBanner from "../../../components/workspaceComponents/profile/profileBanner"
import ProfileBlog from "../../../components/workspaceComponents/profile/profileBlog"

const ApplicationProfilePage = () => {
    return(<> {/* собрать страницу для главной страницы (ей будет профиль) */}

        <WorkspaceHeader />

        <ProfileBanner />

        <ProfileBlog />

    </>)
}

export default ApplicationProfilePage
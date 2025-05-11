import './index.css'

const ProfileBanner = (properties) => {
    return (
        <main className='profileBanner' style={{background: '#fff', color: "#000", padding: "20px"}}>
            <h2>
                {properties.name?properties.name:"User does not exist..."}
            </h2>
            <p>
                {properties.description}
            </p>
        </main>
    )
}

export default ProfileBanner
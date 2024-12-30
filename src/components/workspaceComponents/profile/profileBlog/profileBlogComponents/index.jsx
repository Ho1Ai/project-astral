//здесь я буду писать части блога

const ProfileBlogPostContainer = (properties) => {
    const removeThisChild = () => {
        return properties.removeChildUsingIndex(properties.key) //ну не зря же нас React просит передавать какой-то ключ... Ввиду того, что над этим проектом работают только энтузиасты с небольшим опытом
    }
    
    return (
        <div className="profileBlogPostContainer">
            <p>
                {properties.innerText}
            </p>
        </div>
    )
}

export default ProfileBlogPostContainer
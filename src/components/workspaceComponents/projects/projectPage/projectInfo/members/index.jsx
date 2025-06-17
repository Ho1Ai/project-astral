const ProjectMembers = (properties) => {
    // console.log(properties)
    let isEmpty = false
    return (<section className="projectInfoChildInstance">
        <div className="container">
            <h2>Authors:</h2>
            <p>Team:{properties.authorTeam}</p>
            <p>List:</p>
            <ul>
                {properties.authorsList ? properties.authorsList.map((value, index) => {
                    return(<li key={index}>{value.nickname}</li>)
                }):isEmpty=true}  
            </ul>
        </div>
    </section>)
}

export default ProjectMembers
const ProjectMembers = (properties) => {
    return (<section className="projectInfoChildInstance">
        <div className="container">
            <h1>Authors:</h1>
            <p>Team: {properties.authorTeam}</p>
            <p>List:</p>
            <ul>
                {properties.authorsList ? properties.authorsList.map((value, index) => {
                    return(<li key={index}>{value}</li>)
                }):console.log('no authors mentioned')}  
            </ul>
        </div>
    </section>)
}

export default ProjectMembers
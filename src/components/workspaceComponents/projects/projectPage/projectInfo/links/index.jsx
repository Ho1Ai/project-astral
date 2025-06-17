const ProjectLinks = (properties) => {
    let isEmptyList = false 
    return(
        <section className="projectInfoChildInstance">
            <div className="container">
                <h2>Links</h2>

                {properties.projectLinksArray ? properties.projectLinksArray.map ((value, index) => {
                    return(<a key={index}  href={value.link}>{value.name}</a>)
                }) : /*console.log('no links added for this project')*/ isEmptyList = true}
            </div>
        </section>
    ) // да, сделать всё через ul/li или ol/li нереально.
}

export default ProjectLinks
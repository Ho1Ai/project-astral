const ProjectLinks = (properties) => {
    return(
        <section className="projectInfoChildInstance">
            <div className="container">
                <h1>Links</h1>

                {properties.projectLinksArray ? properties.projectLinksArray.map ((value, index) => {
                    return(<a key={index}  href={value.link}>{value.name}</a>)
                }) : console.log('no links added for this project')}
            </div>
        </section>
    ) // да, сделать всё через ul/li или ol/li нереально.
}

export default ProjectLinks
const ProjectDescription = (properties) => {
    return (
        <section className='projectDescription projectInfoChildInstance'>
            <div className="container">
                <h2>{properties.name}</h2>

                <p>{properties.description}</p>
            </div>
        </section>
    )
}

export default ProjectDescription
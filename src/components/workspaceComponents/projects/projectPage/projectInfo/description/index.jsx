const ProjectDescription = (properties) => {
    return (
        <section className='projectDescription projectInfoChildInstance'>
            <div className="container">
                <h1>{properties.name}</h1>

                <p>{properties.description}</p>
            </div>
        </section>
    )
}

export default ProjectDescription
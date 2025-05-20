import './index.css'

const Offers = () => {
    return (<section className='offersLand'>
            <h1 style={{color: "black", fontSize: 36}}>Not just a to do list</h1>

            <p style={{color: "black", fontSize: 20}} className='offersLandParagraph'>
                Project Astral is an application, which includes lots of things, which may be used in, for example, small studios. It can be used as a tool for project management. Our main purpose is to give small teams an instrument to make it easier to create something new. You can also create your own application using this as a base, because it is fully free and open source. We are using FastAPI on backend and React JS on frontend. Also you can share your ideas on our Discord server (check about page).

            </p>

            <a href="/signin">
            {/* We haven't dropped out backend, because it is raw, but you can use our base-BE-Morlix repo, which includes base backend code which has been written in JS */}
                <button className='startAProjectLandButton'>
                    Start a project
                </button>
            </a>
        </section>)
}

export default Offers
import './index.css'

const PlanedBlock = () => {
    return (
        <section className="planedLand">
            <h1 style={{color: "black", fontSize: 36}}> {/* leave these styles in main css file */}
                Planed/Currently in development
            </h1>

            <p style={{color: "black", fontSize: 20}} className='planedMainParagraph'>
                Here you can see some things we are gonna add once upon a time:
            </p>

            <ol style={{color: "black", fontSize: 20}}>
                <li>Notes - Currently in development. Offer by Ho1Ai.</li>
                <li>Chat - Planed. Offer by EwGak1.</li>
                <li>Wiki - Currently in development. Offer by Ho1Ai.</li>
            </ol>

            <p style={{color: "black", fontSize: 20}} className='planedMainParagraph'>
                You can share your ideas on our Discord server. Most interesting we are gonna add. Also if you want to share your code, you can share it on our Discord server (in closed channels. Can be created by moderators or owners).
            </p>
        </section>
    )
}

export default PlanedBlock
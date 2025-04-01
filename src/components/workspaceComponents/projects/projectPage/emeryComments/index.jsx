import { logedIn } from "../../../../../globals/loginInfo"
import './index.css'

const CommentsList = (properties) => {
    return (<section className="projectPageCommentsList">
        {properties.list ? 
        properties.list.map((value, index) => {
            return(<div key={index}>
                {value.name} <br />
                {value.comment}
            </div>)
        }):console.log('comment list is empty')}
    </section>)
}

export default CommentsList
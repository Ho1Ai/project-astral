import { useRef, useState } from 'react'
import './index.css'

import ProfileBlogPostContainer from './profileBlogComponents'

const ProfileBlog = () => {
    let [postsList, setPostsList] = useState(["трам парам парам папам","парам папам папам папам","(copyright) Винни-пух"])

    let [newPostInputFieldInnerContent, setPostInputFieldInnerContent] = useState("");

    const writeNewPost = () => {
        if (newPostInputFieldInnerContent != "") {
            setPostsList(posts => posts = [...posts, `${newPostInputFieldInnerContent}`]);
            setPostInputFieldInnerContent("")
        }
    }

    const onNewPostInputFieldChange = (event) => {
        setPostInputFieldInnerContent(event.target.value);
    }
    
    return(
        <section className='profileBlogSection'>
            <div className="blogInputContainer">
                <input type="text" className="profileBlogInput" value={newPostInputFieldInnerContent} onChange={onNewPostInputFieldChange}/>
                <button onClick={writeNewPost} className='profileBlogInputSubmiter'>+</button>
            </div>

            <div className="postsListContainer">
                {postsList===undefined ? console.log('no posts yet :(') : postsList.map((childText, index) => {
                    console.log(childText)
                    return(<ProfileBlogPostContainer key={index} innerText={childText} />)
                })}
            </div>        
        </section>
    )
}

//компонент для того, чтобы можно было говорить о чем-то с теми, кто это вообще видит. Вполне неплохая тема, если так посмотреть, ибо здесь можно публиковать новости для людей, которые следят за тем, что ты делаешь. Комментарии к постам делать я не буду (по той причине, что я хочу сделать именно приложение, которое будет скорее помогать заниматься разработкой в команде, а не какую-то соцсеть. Блог здесь и так чисто как формальность будет), но чисто базовый функционал.

export default ProfileBlog
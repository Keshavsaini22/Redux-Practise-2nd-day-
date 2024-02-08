import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import './Post.css'
import Comment from '../comments/Comment';
function Post({ userId, title, body }) {
    const [com, setComment] = useState(false);
    const handleComment = () => {
        setComment(!com)
    }
    return (
        <>    
            <div className='post-container'>
            <div className="upper">
                <div className="userid">{userId}</div>
                <div className="title">{title}</div>
            </div>
            <div className="lower">
                <div className="body">{body}</div>
                <div className="button" onClick={handleComment}>Comments</div>
            </div>
            {
                com && <Comment userId={userId} />
            }
        </div>

        </>
    )
}

export default Post
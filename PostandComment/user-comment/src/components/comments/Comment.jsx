import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchComment } from '../../redux/slice/commentSlice';
function Comment({ userId }) {

    console.log("userId", userId)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComment(userId))
    },[dispatch])
    const allcomments = useSelector((state) => state.comment.comments)
    const isLoading = useSelector((state) => state.comment.isLoading)
    const error = useSelector((state) => state.comment.error)
    console.log("allcomments", allcomments[userId])
    return (
        <>{isLoading && <h1>Data is loading</h1>}
            {error && <h1>Data is loading</h1>}
            {allcomments[userId]?.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    )
}

export default Comment
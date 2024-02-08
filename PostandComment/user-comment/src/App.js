import logo from './logo.svg';
import './App.css';
import Post from './components/post/Post';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPost } from './redux/slice/postSlice';


function App() {
  const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.content)
    const isLoading = useSelector((state) => state.posts.isLoading)
    const error = useSelector((state) => state.posts.error)
    

    useEffect(() => {
        console.log("Before dispatch", posts)
        dispatch(fetchPost())
        console.log("After dispatch", posts)

    }, [dispatch])
    
  return (
    <>
       {posts.map((content) => (
                <Post key={content.id}  userId={content.userId} title={content.title} body={content.body} />
            ))}
            {isLoading && <h2>Loading....</h2>}
            {error && <h2>{error}</h2>}
    </>
  );
}

export default App;

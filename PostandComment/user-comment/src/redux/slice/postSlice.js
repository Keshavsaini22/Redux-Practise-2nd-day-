import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPost = createAsyncThunk('posts/fetchPost',
    async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/posts')
        const data = res.data;
        console.log("res data",data)
        return data;
    }
)

const initialState = {
    content: [],
    isLoading: false,
    error: null,
}
export const postSlice = createSlice(
    {
        name: 'posts',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(fetchPost.pending,(state)=>{
                state.isLoading=true;
            })
            .addCase(fetchPost.fulfilled,(state,action)=>{
                state.isLoading=false
                state.content=action.payload
                console.log("state.content",state.content)
            })
            .addCase(fetchPost.rejected,(state,action)=>{
                state.isLoading=false
                state.error=action.error.message
            })
        }
    }
) 
export default postSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchComment = createAsyncThunk('comment/fetchComment', async (id) => {
    const res = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    const data = {}
    data.info=res.data
    console.log("response of data",res.data)
    data.id=id
    console.log("data.id di value",data.id)
    console.log("data",data)
    return data
})

const initialState = {
    comments: {
        
    },
    isLoading: false,
    error: null,

}
export const commentSlice = createSlice({
    name: 'comment',
    initialState ,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComment.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(fetchComment.fulfilled, (state, action) => {
                state.isLoading = false              
                state.comments[action.payload.id]= action.payload.info
                console.log("state.comments",state.comments[state.id])
            })
            .addCase(fetchComment.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})
export default commentSlice.reducer
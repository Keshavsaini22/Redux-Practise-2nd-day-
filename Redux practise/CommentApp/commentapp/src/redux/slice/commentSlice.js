import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchComment = createAsyncThunk('comment/fetchComment', async () => {
    const res = await axios('https://jsonplaceholder.typicode.com/comments')
    const data = res.data
    console.log(data)
    return data
})

const initialState = {
    content: [],
    isLoading: false,
    error: null,
}
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComment.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(fetchComment.fulfilled, (state, action) => {
                state.isLoading = false
                state.content = action.payload
            })
            .addCase(fetchComment.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})
export default commentSlice.reducer
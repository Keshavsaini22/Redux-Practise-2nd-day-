import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchTodo = createAsyncThunk('todo/fetchTodo',
    async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/todos')
        const data = res.data;
        console.log("res data", data)
        return data;
    }
)

const initialState = {
    content: [],
    isLoading: false,
    error: null,
}

export const todoSlice = createSlice({
    name: 'todo', initialState, reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.content = action.payload
                console.log("state.content", state.content)
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})
export default todoSlice.reducer
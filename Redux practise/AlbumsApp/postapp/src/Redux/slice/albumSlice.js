import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAlbum = createAsyncThunk('album/fetchAlbum',
    async () => {
        const res = await axios('https://jsonplaceholder.typicode.com/albums')
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

export const albumSlice=createSlice({
    name:'album',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAlbum.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(fetchAlbum.fulfilled,(state,action)=>{
            state.isLoading=false
            state.content=action.payload
            console.log(state.content)
        })
        .addCase(fetchAlbum.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
    }
})

export default albumSlice.reducer
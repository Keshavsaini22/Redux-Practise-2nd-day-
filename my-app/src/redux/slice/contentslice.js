import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



const initialState={
    content:[],
    isLoading:false,
    error:null,
}

export const fetchData=createAsyncThunk('content/fetchContent',
async()=>{
    const res=await axios('https://jsonplaceholder.typicode.com/photos')
    const data=await res.data;
    return data;
}
)

export const contentSlice=createSlice({
    name:'content',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading=false
            state.content=action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
    }
})
export default contentSlice.reducer
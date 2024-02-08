import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'



const initialState={
    content:[],
    isLoading:false,
    error:null,
}

export const fetchSecData=createAsyncThunk('seccontent/fetchdata',
async()=>{
    const res=await axios('https://jsonplaceholder.typicode.com/users')
    const data=await res.data;
    console.log(data)
    return data;
}
)

export const secSlice=createSlice({
    name:'seccontent',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSecData.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(fetchSecData.fulfilled,(state,action)=>{
            state.isLoading=false
            state.content=action.payload
        })
        builder.addCase(fetchSecData.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
    }
})
export default secSlice.reducer
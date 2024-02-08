import { configureStore } from '@reduxjs/toolkit'
import  postSlice  from '../slice/slice'

export const store = configureStore({
    reducer: {
        posts: postSlice,
    }
})
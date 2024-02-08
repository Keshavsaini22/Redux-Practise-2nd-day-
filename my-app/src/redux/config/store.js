import { configureStore, createSlice } from '@reduxjs/toolkit'
import contentSlice from '../slice/contentslice'
import secondSlice from '../slice/secondSlice'
import { combineReducers, } from 'redux'

const rootreducer = combineReducers({
    content:contentSlice,
        seccontent:secondSlice
})

export const store = configureStore({
    reducer: rootreducer
})
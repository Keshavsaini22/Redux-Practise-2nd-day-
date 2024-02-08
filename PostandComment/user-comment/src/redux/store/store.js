import { configureStore } from '@reduxjs/toolkit'

import commentSlice from '../slice/commentSlice'
import postSlice from '../slice/postSlice'

export const store=configureStore({
    reducer:{
        comment:commentSlice,
        posts:postSlice,
    }
})
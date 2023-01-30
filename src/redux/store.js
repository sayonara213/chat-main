import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import chatsSlice from './chatsSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    chats: chatsSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store

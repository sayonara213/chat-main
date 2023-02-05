import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import chatsSlice from './chatsSlice'
import searchSlice from './searchChatSlice'
import messageSlice from './messageSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    chats: chatsSlice,
    search: searchSlice,
    message: messageSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store

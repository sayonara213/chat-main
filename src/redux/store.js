import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import chatsSlice from './chatsSlice'
import searchSlice from './searchChatSlice'
import messageSlice from './messageSlice'
import selectedUserSlice from './selectedUserSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    chats: chatsSlice,
    search: searchSlice,
    message: messageSlice,
    user: selectedUserSlice,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store

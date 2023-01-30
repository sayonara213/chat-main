import { createSlice } from '@reduxjs/toolkit'

const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        currentChat: {
            chatId: '',
            chatName: '',
        },
        isSettingsOpen: false,
    },
    reducers: {
        setCurrentChat: (state, action) => {
            state.currentChat = action.payload
        },
        switchSettings: (state) => {
            state.isSettingsOpen = !state.isSettingsOpen
        },
    },
})

export default chatsSlice.reducer

export const { setCurrentChat, switchSettings } = chatsSlice.actions

import { createSlice } from '@reduxjs/toolkit'

const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        currentChat: null,
        isSettingsOpen: false,
        isProfileOpen: false,
        selectedMessage: null,
    },
    reducers: {
        setCurrentChat: (state, action) => {
            state.currentChat = action.payload
        },
        switchSettings: (state) => {
            state.isSettingsOpen = !state.isSettingsOpen
        },
        setSelectedMessage: (state, action) => {
            state.selectedMessage = action.payload
        },
        switchProfile: (state) => {
            state.isProfileOpen = !state.isProfileOpen
        },
    },
})

export default chatsSlice.reducer

export const {
    setCurrentChat,
    switchSettings,
    setSelectedMessage,
    switchProfile,
} = chatsSlice.actions

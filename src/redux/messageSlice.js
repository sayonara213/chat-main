import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'message',
    initialState: {
        isEdit: false,
        isReply: false,
        input: '',
    },
    reducers: {
        setEdit: (state, action) => {
            state.isEdit = action.payload
        },
        setInput: (state, action) => {
            state.input = action.payload
        },
        setReply: (state, action) => {
            state.isReply = action.payload
        },
    },
})

export default authSlice.reducer

export const { setEdit, setInput, setReply } = authSlice.actions

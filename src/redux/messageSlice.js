import { createSlice } from '@reduxjs/toolkit'

const inputSlice = createSlice({
    name: 'input',
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

export default inputSlice.reducer

export const { setEdit, setInput, setReply } = inputSlice.actions

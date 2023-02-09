import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: '',
        results: {
            chats: [],
            users: [],
        },
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setChatsList: (state, action) => {
            state.results.chats = action.payload
        },
        setUsersList: (state, action) => {
            state.results.users = action.payload
        },
    },
})
export default searchSlice.reducer

export const { setSearch, setChatsList, setUsersList } = searchSlice.actions

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { firestore } from '../services/firebase'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export const searchChats = createAsyncThunk('search/chats', async (search) => {
    const chatsRef = collection(firestore, 'chats')
    const searchRef =
        search.length > 0
            ? query(
                  chatsRef,
                  where('chatName', '>=', search),
                  where('chatName', '<=', search + '\uf8ff'),
                  where('users', 'array-contains', {
                      uid: getAuth().currentUser.uid,
                      username: getAuth().currentUser.displayName,
                  }),
                  orderBy('chatName')
              )
            : query(
                  chatsRef,
                  where('users', 'array-contains', {
                      uid: getAuth().currentUser.uid,
                      username: getAuth().currentUser.displayName,
                  })
              )
    const searchResults = await getDocs(searchRef)
    console.log(searchResults.docs[0])
    return searchResults.docs.map((doc) => ({
        chatId: doc.id,
        chatName:
            doc.data().chatType === 'personal'
                ? doc.data().users.find(
                      (user) =>
                          user !==
                          {
                              uid: getAuth().currentUser.uid,
                              nickname: getAuth().currentUser.displayName,
                          }
                  ).username
                : doc.data().chatName,
        lastMessage: doc.data().lastMessage,
        chatType: doc.data().chatType,
        users: doc.data().users,
    }))
})

export const searchUsers = createAsyncThunk('search/users', async (search) => {
    const usersRef = collection(firestore, 'users')
    const searchRef =
        search.length > 0
            ? query(
                  usersRef,
                  where('username', '>=', search),
                  where('username', '<=', search + '\uf8ff')
              )
            : null
    if (searchRef === null) return []
    const searchResults = await getDocs(searchRef)
    return searchResults.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
})

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
        setResults: (state, action) => {
            state.results = action.payload
        },
    },
    extraReducers: {
        [searchChats.fulfilled]: (state, action) => {
            state.results.chats = action.payload
        },
        [searchUsers.fulfilled]: (state, action) => {
            state.results.users = action.payload
        },
    },
})
export default searchSlice.reducer

export const { setSearch, setResults } = searchSlice.actions

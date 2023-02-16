import {
    ChatListWrap,
    GlobalSearchText,
    GlobalSearchWrap,
} from './chat-list.styles'
import { ChatListItem } from './chat-list-item/chat-list-item'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setChatsList,
    setSearch,
    setUsersList,
} from '../../../../redux/searchChatSlice'
import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
    where,
    serverTimestamp,
} from 'firebase/firestore'
import { firestore } from '../../../../services/firebase'
import { getAuth } from 'firebase/auth'
import { UserItem } from './user-item/user-item'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { setCurrentChat } from '../../../../redux/chatsSlice'
import { ChatListItemPlaceholder } from './chat-list-item/chat-list-item.styles'

export const ChatList = () => {
    const { search, results } = useSelector((state) => state.search)

    const dispatch = useDispatch()

    const chatsRef = collection(firestore, 'chats')
    const usersRef = collection(firestore, 'users')

    const [searchedChatList, setSearchedChatList] = useState([])
    const [userLoading, setUserLoading] = useState(true)

    const usersSearchQuery = query(
        usersRef,
        orderBy('username', 'asc'),
        where('username', '>=', search),
        where('username', '<=', search + '\uf8ff')
    )

    const [chats, loading, error, snapshot] = useCollectionData(
        query(
            chatsRef,
            orderBy('lastMessage.createdAt', 'desc'),
            where('users', 'array-contains', getAuth().currentUser.uid)
        )
    )

    useEffect(() => {
        setUserLoading(true)
        if (search.length > 0) {
            getDocs(usersSearchQuery).then((querySnapshot) => {
                const docs = querySnapshot.docs.map((doc) => doc.data())
                dispatch(setUsersList(docs))
                setUserLoading(false)
            })
            setSearchedChatList(
                chats.filter((chat) => {
                    return chat.chatName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                })
            )
        }
    }, [search])

    const handleClick = async (user) => {
        const userChat = await doesChatExist(user)
        if (!userChat) {
            const newChatRef = doc(collection(firestore, 'chats'))
            setDoc(newChatRef, {
                chatId: newChatRef.id,
                chatName: 'Personal',
                chatType: 'personal',
                users: [user.uid, getAuth().currentUser.uid],
                lastMessage: {
                    createdAt: serverTimestamp(),
                },
            }).then(() => {
                dispatch(
                    setCurrentChat({
                        chatId: newChatRef.id,
                        chatName: user.username,
                        chatImage: user.avatar,
                        chatType: 'personal',
                        chatUser: user,
                    })
                )
                dispatch(setSearch(''))
            })
        } else {
            console.log(user)
            dispatch(setSearch(''))
            dispatch(
                setCurrentChat({
                    chatId: userChat.data().chatId,
                    chatName: user.username,
                    chatImage: user.avatar,
                    chatUser: user,
                    chatType: 'personal',
                })
            )
        }
    }

    const doesChatExist = async (user) => {
        const chatsRef = query(
            collection(firestore, 'chats'),
            where('users', 'array-contains', getAuth().currentUser.uid),
            where('chatType', '==', 'personal')
        )
        const chat = await getDocs(chatsRef)

        return chat.docs.find((chat) =>
            chat.data().users.some((member) => member === user.uid)
        )
    }

    if (loading) {
        return (
            <ChatListWrap>
                <ChatListItemPlaceholder />
                <ChatListItemPlaceholder />
                <ChatListItemPlaceholder />
                <ChatListItemPlaceholder />
            </ChatListWrap>
        )
    }

    return (
        <ChatListWrap>
            {search.length > 0
                ? searchedChatList.map((chat) => (
                      <ChatListItem key={chat.chatId} chat={chat} />
                  ))
                : chats.map((chat) => (
                      <ChatListItem key={chat.chatId} chat={chat} />
                  ))}
            {search.length > 0 && !userLoading && (
                <>
                    <GlobalSearchWrap>
                        <GlobalSearchText>Global Search:</GlobalSearchText>
                    </GlobalSearchWrap>
                    {results.users?.map((user) => (
                        <UserItem
                            user={user}
                            key={user.username}
                            click={handleClick}
                        />
                    ))}
                </>
            )}
        </ChatListWrap>
    )
}

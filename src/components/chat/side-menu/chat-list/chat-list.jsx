import {
    ChatListWrap,
    GlobalSearchText,
    GlobalSearchWrap,
} from './chat-list.styles'
import { ChatListItem } from './chat-list-item/chat-list-item'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchChats, searchUsers } from '../../../../redux/searchChatSlice'
import {
    collection,
    doc,
    query,
    setDoc,
    getDocs,
    where,
} from 'firebase/firestore'
import { firestore } from '../../../../services/firebase'
import { getAuth } from 'firebase/auth'
import { UserItem } from './user-item/user-item'

export const ChatList = () => {
    const { search, results } = useSelector((state) => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchChats(search))
        dispatch(searchUsers(search))
    }, [dispatch, search])

    const handleClick = (user) => {
        doesChatExist(user).then((exists) => {
            if (!exists) {
                const newChatRef = doc(collection(firestore, 'chats'))
                setDoc(newChatRef, {
                    chatId: user.uid + getAuth().currentUser.uid,
                    chatName: 'Personal',
                    chatType: 'personal',
                    users: [
                        { uid: user.uid, username: user.username },
                        {
                            uid: getAuth().currentUser.uid,
                            username: getAuth().currentUser.displayName,
                        },
                    ],
                })
            } else {
                console.log(`chat already exists`)
            }
        })
    }

    const doesChatExist = async (user) => {
        const chatsRef = query(
            collection(firestore, 'chats'),
            where('chatId', '==', user.uid + getAuth().currentUser.uid),
            where('chatType', '==', 'personal')
        )
        return !(await getDocs(chatsRef)).empty
    }

    return (
        <ChatListWrap>
            {results.chats?.map((chat) => (
                <ChatListItem key={chat.chatId} chat={chat} />
            ))}
            {search && (
                <>
                    <GlobalSearchWrap>
                        <GlobalSearchText>Global Search:</GlobalSearchText>
                    </GlobalSearchWrap>
                    {results.users.map((user) => (
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

import { ChatListWrap } from './chat-list.styles'
import { ChatListItem } from './chat-list-item/chat-list-item'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query, where } from 'firebase/firestore'
import { firestore, auth } from '../../../../services/firebase'
import { Loading } from '../../../loading/loading'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'

export const ChatList = () => {
    const [user, userLoading] = useAuthState(auth)

    const chatsRef = collection(firestore, 'chats')

    const [combinedResult, setCombinedResult] = useState([])

    const [privateChats, privateChatsLoading, privateChatsError] =
        useCollectionData(
            query(chatsRef, where('users', 'array-contains', user.uid))
        )

    const [publicChats, publicChatsLoading, publicChatsError] =
        useCollectionData(query(chatsRef, where('isPublic', '==', true)))

    useEffect(() => {
        if (!privateChatsLoading && !publicChatsLoading) {
            setCombinedResult([...privateChats, ...publicChats])
        }
    }, [privateChatsLoading, publicChatsLoading, privateChats, publicChats])

    if (privateChatsLoading || publicChatsLoading || userLoading) {
        return <Loading />
    }

    return (
        <ChatListWrap>
            {combinedResult.map((chat) => (
                <ChatListItem key={chat.chatId} chat={chat} />
            ))}
        </ChatListWrap>
    )
}

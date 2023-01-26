import {
    ChatMessagesContainer,
    MessagesContainerWrap,
} from './messages-container.styles'
import { Message } from './message/message'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { auth, firestore } from '../../../../services/firebase'
import { Loading } from '../../../loading/loading'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useRef } from 'react'

export const MessagesContainer = () => {
    const bottomRef = useRef(null)

    const [messages, loading, error] = useCollectionData(
        query(collection(firestore, 'messages'), orderBy('createdAt', 'asc'))
    )
    const [user, userLoading, obj] = useAuthState(auth)

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    if (loading || error) {
        return <Loading />
    }

    return (
        <MessagesContainerWrap>
            <ChatMessagesContainer>
                {messages.map(
                    (message) =>
                        message.createdAt && (
                            <Message
                                text={message.text}
                                avatar={message.photoURL}
                                author={message.uid === user.uid}
                                time={message.createdAt}
                            />
                        )
                )}
                <div ref={bottomRef} />
            </ChatMessagesContainer>
        </MessagesContainerWrap>
    )
}

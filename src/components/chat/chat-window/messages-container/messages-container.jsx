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
import { useEffect, useRef, useState } from 'react'
import { Tools } from './tools/tools'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

export const MessagesContainer = () => {
    const bottomRef = useRef(null)

    const [user, userLoading, obj] = useAuthState(auth)

    const selectedMessage = useSelector((state) => state.chats.selectedMessage)
    const currentChat = useSelector((state) => state.chats.currentChat)

    const [messagesLimit, setMessagesLimit] = useState(2)
    const [tools, setTools] = useState(false)
    const [mousePos, setMousePos] = useState({})
    /*    const [messages, setMessages] = useState([])*/

    const [messages, loading, error, snapshot] = useCollectionData(
        query(
            collection(
                collection(firestore, 'chats'),
                currentChat.chatId,
                'messages'
            ),
            orderBy('createdAt', 'desc')
        )
    )
    /* useEffect(() => {
        collection(firestore, 'chats')
            .doc(currentChat.chatId)
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .limit(4)
            .get()
            .then((collection) => {
                const messages = collection.docs.map((doc) => doc.data())
                setMessages(messages)
            })
    }, [])*/

    const fetchMore = () => {
        setMessagesLimit(messagesLimit + 2)
    }

    const handleToolsWindow = (event) => {
        setTools(true)
        const rect = document
            .getElementById('message-container')
            .getBoundingClientRect()
        setMousePos({
            x: event.clientX - rect.left,
            y:
                event.clientY > 680
                    ? event.clientY - (rect.top + 120)
                    : event.clientY - rect.top,
        })
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    /*    useEffect(() => {
        setReversedMessages(messages?.reverse())
    }, [messages])*/
    if (loading || error) {
        return <Loading />
    }

    return (
        <MessagesContainerWrap id={'message-container'}>
            <ChatMessagesContainer>
                {messages.map(
                    (message) =>
                        message.createdAt && (
                            <Message
                                key={message.messageId}
                                author={message.uid === user.uid}
                                isEdited={message.isEdited}
                                message={message}
                                showTools={handleToolsWindow}
                            />
                        )
                )}
                <div ref={bottomRef} />
            </ChatMessagesContainer>
            <AnimatePresence>
                {tools && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        <Tools
                            hideTools={() => setTools(false)}
                            pos={mousePos}
                            message={selectedMessage}
                            chatId={currentChat.chatId}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </MessagesContainerWrap>
    )
}

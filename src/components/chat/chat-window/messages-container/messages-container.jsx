import {
    ChatMessagesContainer,
    MessagesContainerWrap,
} from './messages-container.styles'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query, limit } from 'firebase/firestore'
import { auth, firestore } from '../../../../services/firebase'
import { Loading } from '../../../loading/loading'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useRef, useState } from 'react'
import { Tools } from './tools/tools'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Message } from './message/message'

export const MessagesContainer = () => {
    const [user, userLoading, obj] = useAuthState(auth)

    const selectedMessage = useSelector((state) => state.chats.selectedMessage)
    const currentChat = useSelector((state) => state.chats.currentChat)

    const [tools, setTools] = useState(false)
    const [mousePos, setMousePos] = useState({})

    const bottomRef = useRef(null)
    const containerRef = useRef(null)

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

    const handleToolsWindow = (event) => {
        setTools(true)
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
            x: event.clientX - rect.left,
            y:
                event.clientY > 680
                    ? event.clientY - (rect.top + 120)
                    : event.clientY - rect.top,
        })
    }
    const handleCloseTools = () => {
        setTools(false)
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    if (loading || userLoading) {
        return <Loading />
    }

    return (
        <MessagesContainerWrap id={'message-container'} ref={containerRef}>
            <ChatMessagesContainer>
                {messages.map(
                    (message) =>
                        message.createdAt && (
                            <Message
                                key={message.messageId}
                                isEdited={message.isEdited}
                                message={message}
                                currentUserId={user.uid}
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
                            hideTools={handleCloseTools}
                            pos={mousePos}
                            message={selectedMessage}
                            chatId={currentChat.chatId}
                            currentUser={user.displayName}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </MessagesContainerWrap>
    )
}

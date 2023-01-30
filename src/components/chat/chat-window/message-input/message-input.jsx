import { useState } from 'react'
import {
    ButtonIcon,
    Input,
    MessageInputWrap,
    TextareaWrap,
} from './message-input.styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../../../services/firebase'
import { setDoc, collection, doc } from 'firebase/firestore'
import { IMAGES } from '../../../../constants/images'
import { serverTimestamp } from 'firebase/firestore'

import TextareaAutosize from 'react-textarea-autosize'
import { useSelector } from 'react-redux'

export const MessageInput = () => {
    const [user, loading, error] = useAuthState(auth)
    const [message, setMessage] = useState('')
    const currentChat = useSelector((state) => state.chats.currentChat)

    const handleSendMessage = async () => {
        if (message !== '') {
            const newMessageRef = await doc(collection(firestore, 'messages'))
            await setDoc(newMessageRef, {
                messageId: newMessageRef.id,
                chatId: currentChat.chatId,
                uid: user.uid,
                photoURL: user.photoURL,
                text: message,
                createdAt: serverTimestamp(),
            })
            setMessage('')
        }
    }

    const handleKeypress = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <MessageInputWrap>
            <ButtonIcon src={IMAGES.file} />
            <TextareaWrap>
                <TextareaAutosize
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={' Write your message...'}
                    rows={1}
                    onKeyDown={handleKeypress}
                />
            </TextareaWrap>
            <ButtonIcon
                onClick={handleSendMessage}
                src={IMAGES.send}
            ></ButtonIcon>
        </MessageInputWrap>
    )
}

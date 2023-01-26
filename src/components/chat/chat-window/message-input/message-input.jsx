import { useState } from 'react'
import { ButtonIcon, Input, MessageInputWrap } from './message-input.styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../../../services/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { IMAGES } from '../../../../constants/images'
import { serverTimestamp } from 'firebase/firestore'

export const MessageInput = () => {
    const [user, loading, error] = useAuthState(auth)
    const [message, setMessage] = useState('')

    const handleSendMessage = () => {
        console.log(message)
        message !== '' &&
            addDoc(collection(firestore, 'messages'), {
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: message,
                createdAt: serverTimestamp(),
                adminId: '5zA2b3qQpePqNWyYwGUL3J0Q8iT2',
            })
        setMessage('')
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
            <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={' Write your message...'}
                rows={1}
                onKeyDown={handleKeypress}
            />
            <ButtonIcon
                onClick={handleSendMessage}
                src={IMAGES.send}
            ></ButtonIcon>
        </MessageInputWrap>
    )
}

import {
    ButtonIcon,
    EditMessageText,
    EditMessageWrap,
    InputContainer,
    MessageInputWrap,
    TextareaWrap,
} from './message-input.styles'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../../../services/firebase'
import { setDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { IMAGES } from '../../../../constants/images'
import { serverTimestamp } from 'firebase/firestore'

import TextareaAutosize from 'react-textarea-autosize'
import { useDispatch, useSelector } from 'react-redux'
import { setEdit, setInput, setReply } from '../../../../redux/messageSlice'

export const MessageInput = () => {
    const [user, loading, error] = useAuthState(auth)
    const dispatch = useDispatch()
    const message = useSelector((state) => state.message.input)
    const currentChat = useSelector((state) => state.chats.currentChat)
    const isEdit = useSelector((state) => state.message.isEdit)
    const isReply = useSelector((state) => state.message.isReply)
    const selectedMessage = useSelector((state) => state.chats.selectedMessage)

    const handleSendMessage = async () => {
        if (message !== '') {
            const currentChatRef = doc(
                collection(firestore, 'chats'),
                currentChat.chatId
            )
            const newMessageRef = doc(collection(currentChatRef, 'messages'))

            isReply
                ? await setDoc(newMessageRef, {
                      messageId: newMessageRef.id,
                      userName: user.displayName,
                      chatId: currentChat.chatId,
                      uid: user.uid,
                      photoURL: user.photoURL,
                      text: message,
                      reply: selectedMessage,
                      createdAt: serverTimestamp(),
                  })
                : await setDoc(newMessageRef, {
                      messageId: newMessageRef.id,
                      userName: user.displayName,
                      chatId: currentChat.chatId,
                      uid: user.uid,
                      photoURL: user.photoURL,
                      text: message,
                      createdAt: serverTimestamp(),
                  })

            await updateDoc(currentChatRef, {
                lastMessage: {
                    messageId: newMessageRef.id,
                    userName: user.displayName,
                    text: message,
                },
            })
            dispatch(setInput(''))
        }
    }

    const handleEditMessage = async () => {
        if (message !== '') {
            console.log(selectedMessage.messageId, currentChat.chatId)
            const currentChatRef = doc(
                collection(firestore, 'chats'),
                currentChat.chatId
            )
            const messageRef = doc(
                collection(currentChatRef, 'messages'),
                selectedMessage.messageId
            )
            await updateDoc(messageRef, {
                text: message,
                isEdited: true,
            })
            dispatch(setInput(''))
            dispatch(setEdit(false))
        }
    }

    const handleKeypress = (e) => {
        console.log(e.keyCode)
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            !isEdit ? handleSendMessage() : handleEditMessage()
        }
        if (e.keyCode === 27 && isEdit) {
            e.preventDefault()
            handleCloseEdit()
        }
    }

    const handleCloseEdit = () => {
        dispatch(setEdit(false))
        dispatch(setInput(''))
    }

    const handleCloseReply = () => {
        dispatch(setReply(false))
    }

    return (
        <InputContainer>
            <MessageInputWrap>
                <ButtonIcon src={IMAGES.file} />
                <TextareaWrap className={'123123'}>
                    {isEdit && (
                        <EditMessageWrap onClick={handleCloseEdit}>
                            <EditMessageText>
                                Editing: {selectedMessage.userName}:{' '}
                                {selectedMessage.text}
                            </EditMessageText>
                        </EditMessageWrap>
                    )}
                    {isReply && (
                        <EditMessageWrap onClick={handleCloseReply}>
                            <EditMessageText>
                                Reply to: {selectedMessage.userName}:{' '}
                                {selectedMessage.text}
                            </EditMessageText>
                        </EditMessageWrap>
                    )}
                    <TextareaAutosize
                        type="text"
                        value={message}
                        onChange={(e) => dispatch(setInput(e.target.value))}
                        placeholder={' Write your message...'}
                        rows={1}
                        onKeyDown={handleKeypress}
                    />
                </TextareaWrap>
                <ButtonIcon
                    onClick={isEdit ? handleEditMessage : handleSendMessage}
                    src={IMAGES.send}
                ></ButtonIcon>
            </MessageInputWrap>
        </InputContainer>
    )
}

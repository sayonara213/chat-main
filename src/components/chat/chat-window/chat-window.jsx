import { ChatWindowWrap } from './chat-window.styles'
import { MessageInput } from './message-input/message-input'
import { MessagesContainer } from './messages-container/messages-container'
import {
    ChatHeader,
    ChatHeaderButton,
    ChatHeaderText,
} from './messages-container/messages-container.styles'
import { IMAGES } from '../../../constants/images'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { TransparentContainer } from '../../transparent-container/transparent-container.styles'
import { switchSettings } from '../../../redux/chatsSlice'

export const ChatWindow = () => {
    const currentChat = useSelector((state) => state.chats.currentChat)
    const dispatch = useDispatch()

    const handleChatSettings = () => {
        dispatch(switchSettings())
    }

    return (
        <ChatWindowWrap>
            <ChatHeader>
                <ChatHeaderText>{currentChat.chatName}</ChatHeaderText>
                <ChatHeaderButton
                    src={IMAGES.userGroup}
                    onClick={handleChatSettings}
                ></ChatHeaderButton>
            </ChatHeader>
            <MessagesContainer />
            <MessageInput />
        </ChatWindowWrap>
    )
}

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
import { switchSettings } from '../../../redux/chatsSlice'

export const ChatWindow = () => {
    const currentChat = useSelector((state) => state.chats.currentChat)
    const dispatch = useDispatch()

    const handleChatSettings = () => {
        dispatch(switchSettings())
    }

    if (!currentChat) {
        return (
            <ChatWindowWrap>
                <ChatHeader></ChatHeader>

                <MessageInput />
            </ChatWindowWrap>
        )
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

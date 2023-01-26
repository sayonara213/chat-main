import {
    ChatListItemAvatarWrap,
    ChatListItemInfoWrap,
    ChatListItemLastMessage,
    ChatListItemName,
    ChatListItemWrap,
} from './chat-list-item.styles'
import { IMAGES } from '../../../../../constants/images'
import { CircleAvatar } from '../../../circle-avatar/circle-avatar'
import { useState } from 'react'

export const ChatListItem = () => {
    const [currentChat, setCurrentChat] = useState(false)
    const handleClick = () => {
        setCurrentChat(!currentChat)
    }

    return (
        <ChatListItemWrap onClick={handleClick} current={currentChat}>
            <ChatListItemAvatarWrap>
                <CircleAvatar src={IMAGES.noAvatar} size={60} />
            </ChatListItemAvatarWrap>
            <ChatListItemInfoWrap>
                <ChatListItemName>Dave's Group</ChatListItemName>
                <ChatListItemLastMessage>
                    Text text text text text text text text text text text text
                    text text
                </ChatListItemLastMessage>
            </ChatListItemInfoWrap>
        </ChatListItemWrap>
    )
}

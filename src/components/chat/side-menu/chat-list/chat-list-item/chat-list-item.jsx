import {
    ChatListItemAvatarWrap,
    ChatListItemInfoWrap,
    ChatListItemLastMessage,
    ChatListItemName,
    ChatListItemWrap,
} from './chat-list-item.styles'
import { IMAGES } from '../../../../../constants/images'
import { CircleAvatar } from '../../../circle-avatar/circle-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentChat } from '../../../../../redux/chatsSlice'

export const ChatListItem = ({ chat }) => {
    const currentChat = useSelector((state) => state.chats.currentChat)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(setCurrentChat(chat))
    }

    return (
        <ChatListItemWrap
            onClick={handleClick}
            current={currentChat.chatId === chat.chatId}
        >
            <ChatListItemAvatarWrap>
                <CircleAvatar src={IMAGES.noAvatar} size={60} />
            </ChatListItemAvatarWrap>
            <ChatListItemInfoWrap>
                <ChatListItemName>{chat.chatName}</ChatListItemName>
                <ChatListItemLastMessage>
                    Text text text text text text text text text text text text
                    text text
                </ChatListItemLastMessage>
            </ChatListItemInfoWrap>
        </ChatListItemWrap>
    )
}

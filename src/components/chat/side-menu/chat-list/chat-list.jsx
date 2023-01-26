import { ChatListWrap } from './chat-list.styles'
import { ChatListItem } from './chat-list-item/chat-list-item'

export const ChatList = () => {
    return (
        <ChatListWrap>
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
            <ChatListItem />
        </ChatListWrap>
    )
}

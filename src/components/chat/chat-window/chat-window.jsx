import { ChatWindowWrap } from './chat-window.styles'
import { MessageInput } from './message-input/message-input'
import { MessagesContainer } from './messages-container/messages-container'
import {
    ChatHeader,
    ChatHeaderButton,
    ChatHeaderText,
} from './messages-container/messages-container.styles'
import { IMAGES } from '../../../constants/images'

export const ChatWindow = () => {
    return (
        <ChatWindowWrap>
            <ChatHeader>
                <ChatHeaderText>David's chat group</ChatHeaderText>
                <ChatHeaderButton src={IMAGES.userGroup}></ChatHeaderButton>
            </ChatHeader>
            <MessagesContainer />
            <MessageInput />
        </ChatWindowWrap>
    )
}

import { ChatWrap } from './chat.styles'
import { ChatWindow } from './chat-window/chat-window'
import { SideMenu } from './side-menu/siide-menu'

export const Chat = () => {
    return (
        <ChatWrap>
            <SideMenu />
            <ChatWindow />
        </ChatWrap>
    )
}

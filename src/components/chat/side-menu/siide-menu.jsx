import { Navbar } from './navbar/navbar'
import { ChatList } from './chat-list/chat-list'
import {
    ChatListSection,
    ChatSearchInput,
    ChatSearchWrap,
    SideMenuWrap,
} from './side-menu.styles'

export const SideMenu = () => {
    return (
        <SideMenuWrap>
            <Navbar />
            <ChatListSection>
                <ChatSearchWrap>
                    <ChatSearchInput placeholder={' Search...'} />
                </ChatSearchWrap>
                <ChatList />
            </ChatListSection>
        </SideMenuWrap>
    )
}

import { Navbar } from './navbar/navbar'
import { ChatList } from './chat-list/chat-list'
import {
    ChatListSection,
    ChatSearchInput,
    ChatSearchWrap,
    SideMenuWrap,
} from './side-menu.styles'
import { useDispatch } from 'react-redux'
import { setSearch } from '../../../redux/searchChatSlice'

export const SideMenu = () => {
    const dispatch = useDispatch()

    return (
        <SideMenuWrap>
            <Navbar />
            <ChatListSection>
                <ChatSearchWrap>
                    <ChatSearchInput
                        placeholder={' Search...'}
                        onChange={(e) => {
                            dispatch(setSearch(e.target.value))
                        }}
                    />
                </ChatSearchWrap>
                <ChatList />
            </ChatListSection>
        </SideMenuWrap>
    )
}

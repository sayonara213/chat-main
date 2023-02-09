import { ChatWrap } from './chat.styles'
import { ChatWindow } from './chat-window/chat-window'
import { SideMenu } from './side-menu/siide-menu'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileSettings } from './chat-window/profile-settings/profile-settings'
import { switchProfile } from '../../redux/chatsSlice'

export const Chat = () => {
    const profileSettings = useSelector((state) => state.chats.isProfileOpen)
    const dispatch = useDispatch()
    const closeProfileSettings = () => {
        dispatch(switchProfile())
    }
    return (
        <>
            {profileSettings && (
                <ProfileSettings onclick={closeProfileSettings} />
            )}
            <ChatWrap>
                <SideMenu />
                <ChatWindow />
            </ChatWrap>
        </>
    )
}

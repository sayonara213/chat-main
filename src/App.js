import { Theme } from './constants/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { HashRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebase'
import { Loading } from './components/loading/loading'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { switchSettings, switchUserInfo } from './redux/chatsSlice'
import { ChatSettings } from './components/chat/chat-window/chat-settings/chat-settings'
import { UserInfo } from './components/chat/chat-window/user-info/user-info'

function App() {
    const [user, loading, error] = useAuthState(auth)

    const chatSettings = useSelector((state) => state.chats.isSettingsOpen)
    const userInfo = useSelector((state) => state.chats.isUserInfoOpen)
    const currentChat = useSelector((state) => state.chats.currentChat)
    const dispatch = useDispatch()

    const handleChatSettings = () => {
        dispatch(switchSettings())
    }

    const handleUserInfo = () => {
        dispatch(switchUserInfo())
    }

    if (loading) {
        return (
            <Theme>
                <Loading />
            </Theme>
        )
    }

    return (
        <Theme>
            {chatSettings && (
                <ChatSettings
                    handleClose={handleChatSettings}
                    chatType={currentChat.chatType}
                />
            )}
            {userInfo && <UserInfo handleClose={handleUserInfo} />}
            <HashRouter>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <AppRouter />
            </HashRouter>
        </Theme>
    )
}

export default App

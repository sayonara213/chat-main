import { Auth } from './components/authorization/auth'
import { Theme } from './constants/theme'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './services/firebase'
import { Loading } from './components/loading/loading'

import './App.css'
import { TransparentContainer } from './components/transparent-container/transparent-container.styles'
import { useDispatch, useSelector } from 'react-redux'
import { switchSettings } from './redux/chatsSlice'
import { ChatSettings } from './components/chat/chat-window/chat-settings/chat-settings'
import { useState } from 'react'
import { ProfileSettings } from './components/chat/chat-window/profile-settings/profile-settings'

function App() {
    const [user, loading, error] = useAuthState(auth)

    const chatSettings = useSelector((state) => state.chats.isSettingsOpen)
    const currentChat = useSelector((state) => state.chats.currentChat)
    const dispatch = useDispatch()

    const handleChatSettings = () => {
        dispatch(switchSettings())
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
            <BrowserRouter>
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
            </BrowserRouter>
        </Theme>
    )
}

export default App

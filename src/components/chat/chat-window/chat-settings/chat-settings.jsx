import { TransparentContainer } from '../../../transparent-container/transparent-container.styles'
import {
    ChatAvatarWrap,
    ChatName,
    ChatSettingsButton,
    ChatSettingsWrap,
} from './chat-settings.styles'
import { CircleAvatar } from '../../circle-avatar/circle-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { IMAGES } from '../../../../constants/images'
import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore'
import { firestore } from '../../../../services/firebase'
import { setCurrentChat } from '../../../../redux/chatsSlice'

export const ChatSettings = ({ handleClose, chatType }) => {
    const currentChat = useSelector((state) => state.chats.currentChat)
    const dispatch = useDispatch()

    const currentChatRef = doc(
        collection(firestore, 'chats'),
        currentChat.chatId
    )

    const messagesRef = collection(currentChatRef, 'messages')

    const handleClearChat = () => {
        getDocs(messagesRef).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                deleteDoc(doc.ref)
            })
        })
    }

    const handleDeleteChat = () => {
        deleteDoc(currentChatRef)
        dispatch(setCurrentChat(null))
    }

    if (chatType === 'personal') {
        return (
            <TransparentContainer onClick={handleClose}>
                <ChatSettingsWrap>
                    <ChatAvatarWrap>
                        <CircleAvatar
                            size={70}
                            src={currentChat.chatImage}
                        ></CircleAvatar>
                    </ChatAvatarWrap>
                    <ChatName>
                        Username: {currentChat.chatUser.username}
                    </ChatName>
                    <ChatName>email: {currentChat.chatUser.email}</ChatName>
                    <ChatSettingsButton onClick={handleClearChat}>
                        Clear Chat
                    </ChatSettingsButton>
                    <ChatSettingsButton onClick={handleDeleteChat}>
                        Delete Chat
                    </ChatSettingsButton>
                </ChatSettingsWrap>
            </TransparentContainer>
        )
    } else
        return (
            <TransparentContainer onClick={handleClose}>
                <ChatSettingsWrap>
                    <ChatAvatarWrap>
                        <CircleAvatar
                            size={70}
                            src={IMAGES.noAvatar}
                        ></CircleAvatar>
                    </ChatAvatarWrap>
                    <ChatName>Chat Name: {currentChat.chatName}</ChatName>
                    <ChatSettingsButton>Leave Chat</ChatSettingsButton>
                </ChatSettingsWrap>
            </TransparentContainer>
        )
}

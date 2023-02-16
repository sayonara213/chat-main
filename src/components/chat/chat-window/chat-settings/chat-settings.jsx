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
import {
    ProfileBioLabel,
    ProfileSettingsHeader,
    ProfileSettingsWrap,
    SettingsButton,
    UserProfileAvatar,
    UserProfileEmail,
    UserProfileName,
    UserProfileWrap,
} from '../profile-settings/profile-settings.styles'

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
                <ProfileSettingsWrap>
                    <ProfileSettingsHeader>Info</ProfileSettingsHeader>
                    <UserProfileWrap>
                        <UserProfileAvatar>
                            <CircleAvatar
                                size={100}
                                src={currentChat.chatUser.avatar}
                            ></CircleAvatar>
                        </UserProfileAvatar>
                        <UserProfileName>
                            {currentChat.chatUser.username}
                        </UserProfileName>
                        <UserProfileEmail>
                            {currentChat.chatUser.email}
                        </UserProfileEmail>
                    </UserProfileWrap>
                    <ProfileBioLabel>
                        {currentChat.chatUser.bio}
                    </ProfileBioLabel>
                    <SettingsButton onClick={handleDeleteChat}>
                        Delete Chat
                    </SettingsButton>
                    <SettingsButton onClick={handleClearChat}>
                        Clear Chat
                    </SettingsButton>
                </ProfileSettingsWrap>
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

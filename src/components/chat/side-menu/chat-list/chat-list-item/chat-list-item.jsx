import {
    ChatListItemAvatarWrap,
    ChatListItemInfoWrap,
    ChatListItemLastMessage,
    ChatListItemName,
    ChatListItemPlaceholder,
    ChatListItemWrap,
} from './chat-list-item.styles'
import { IMAGES } from '../../../../../constants/images'
import { CircleAvatar } from '../../../circle-avatar/circle-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentChat } from '../../../../../redux/chatsSlice'
import { useEffect, useState } from 'react'
import { firestore } from '../../../../../services/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export const ChatListItem = ({ chat }) => {
    const currentChat = useSelector((state) => state.chats.currentChat)
    const [chatName, setChatName] = useState(chat.chatName)
    const [chatImage, setChatImage] = useState(IMAGES.noAvatar)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const handleClick = () => {
        chat.chatType === 'personal'
            ? dispatch(
                  setCurrentChat({
                      chatId: chat.chatId,
                      chatName: user.username,
                      chatImage: user.avatar,
                      chatUser: user,
                      chatType: 'personal',
                  })
              )
            : dispatch(
                  setCurrentChat({
                      chatId: chat.chatId,
                      chatName: chat.chatName,
                      chatImage: IMAGES.noAvatar,
                      chatType: 'group',
                  })
              )
    }

    useEffect(() => {
        const fetchUserData = async () => {
            if (chat.chatType === 'personal') {
                const chatUser = chat.users.find(
                    (user) => user.uid !== getAuth().currentUser.uid
                )
                const usersRef = query(
                    collection(firestore, 'users'),
                    where('uid', '==', chatUser.uid)
                )
                //only one user is returned, so we can use getDoc() instead of getDocs()
                getDocs(usersRef).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setChatName(doc.data().username)
                        setChatImage(doc.data().avatar)
                        setUser(doc.data())
                        setLoading(false)
                    })
                })
            } else {
                setLoading(false)
            }
        }
        fetchUserData()
    }, [])

    return loading ? (
        <ChatListItemPlaceholder />
    ) : (
        <ChatListItemWrap
            onClick={handleClick}
            current={currentChat ? currentChat.chatId === chat.chatId : false}
        >
            <ChatListItemAvatarWrap>
                <CircleAvatar src={chatImage} size={60} />
            </ChatListItemAvatarWrap>
            <ChatListItemInfoWrap>
                <ChatListItemName>{chatName}</ChatListItemName>
                <ChatListItemLastMessage>
                    {chat.lastMessage
                        ? `${chat.lastMessage.userName}: ${chat.lastMessage.text}`
                        : 'No messages yet'}
                </ChatListItemLastMessage>
            </ChatListItemInfoWrap>
        </ChatListItemWrap>
    )
}

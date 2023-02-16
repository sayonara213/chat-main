import {
    MessageText,
    MessageContainer,
    AvatarWrap,
    MessageWrap,
    AbsoluteContainer,
    MessageDate,
    MessageDateWrap,
    MessageAddWrap,
    ReplyMessage,
    ReplyWrap,
    ReplyUsername,
} from './message.styles'
import { CircleAvatar } from '../../../circle-avatar/circle-avatar'
import { useDispatch, useSelector } from 'react-redux'
import {
    setSelectedMessage,
    switchUserInfo,
} from '../../../../../redux/chatsSlice'
import { useEffect, useMemo, useState } from 'react'
import { collection, doc, getDoc } from 'firebase/firestore'
import { firestore } from '../../../../../services/firebase'
import { setSelectedUser } from '../../../../../redux/selectedUserSlice'

export const Message = ({ currentUserId, showTools, isEdited, message }) => {
    const dispatch = useDispatch()
    const currentChat = useSelector((state) => state.chats.currentChat)
    const [user, setUser] = useState(null)

    const currentChatRef = doc(
        collection(firestore, 'chats'),
        currentChat.chatId
    )

    const messageRef = doc(
        collection(currentChatRef, 'messages'),
        message.messageId
    )

    const memoUser = useMemo(async () => {
        console.log('User Fetched: ', message.user.id)
        const messageData = await getDoc(messageRef)
        const userData = await getDoc(messageData.data().user)
        return userData.data()
    }, [message.user])

    useEffect(() => {
        memoUser.then((data) => {
            setUser(data)
        })
    }, [memoUser])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            setSelectedMessage({
                messageId: message.messageId,
                text: message.text,
                avatar: user.avatar,
                userName: user.username,
            })
        )
        showTools(e)
    }

    const showUserInfo = () => {
        dispatch(setSelectedUser(user))
        dispatch(switchUserInfo())
    }

    if (user === null) return null

    return (
        <MessageContainer>
            <AvatarWrap onClick={showUserInfo}>
                <AbsoluteContainer>
                    <CircleAvatar src={user.avatar} size={30} />
                </AbsoluteContainer>
            </AvatarWrap>
            <MessageWrap
                author={user.uid === currentUserId}
                onContextMenu={handleClick}
            >
                <MessageAddWrap>
                    {message.reply && (
                        <ReplyWrap>
                            <ReplyUsername>
                                {message.reply.userName}
                            </ReplyUsername>
                            <ReplyMessage>{message.reply.text}</ReplyMessage>
                        </ReplyWrap>
                    )}
                    <MessageText>{message.text}</MessageText>
                </MessageAddWrap>
                <MessageDateWrap>
                    <MessageDate>
                        {new Date(
                            message.createdAt.seconds * 1000
                        ).toLocaleTimeString()}{' '}
                        {isEdited && '(edited)'}
                    </MessageDate>
                </MessageDateWrap>
            </MessageWrap>
        </MessageContainer>
    )
}

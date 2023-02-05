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
import { useDispatch } from 'react-redux'
import { setSelectedMessage } from '../../../../../redux/chatsSlice'

export const Message = ({ author, showTools, isEdited, message }) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        dispatch(
            setSelectedMessage({
                messageId: message.messageId,
                text: message.text,
                avatar: message.photoURL,
                userName: message.userName,
            })
        )
        e.preventDefault()
        showTools(e)
    }

    return (
        <MessageContainer>
            <AvatarWrap>
                <AbsoluteContainer>
                    <CircleAvatar src={message.photoURL} size={30} />
                </AbsoluteContainer>
            </AvatarWrap>
            <MessageWrap author={author} onContextMenu={handleClick}>
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

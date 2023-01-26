import {
    MessageText,
    MessageContainer,
    AvatarWrap,
    MessageWrap,
    AbsoluteContainer,
    MessageDate,
    MessageDateWrap,
} from './message.styles'
import { CircleAvatar } from '../../../circle-avatar/circle-avatar'

export const Message = ({ text, avatar, author, time }) => {
    return (
        <MessageContainer>
            <AvatarWrap>
                <AbsoluteContainer>
                    <CircleAvatar src={avatar} size={30} />
                </AbsoluteContainer>
            </AvatarWrap>
            <MessageWrap author={author}>
                <MessageText>{text}</MessageText>
                <MessageDateWrap>
                    <MessageDate>
                        {new Date(time.seconds * 1000).toLocaleTimeString()}
                    </MessageDate>
                </MessageDateWrap>
            </MessageWrap>
        </MessageContainer>
    )
}

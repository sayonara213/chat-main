import {
    ChatListItemAvatarWrap,
    UserItemInfoWrap,
    UserItemWrap,
    UserName,
} from './user-item.styles'
import { CircleAvatar } from '../../../circle-avatar/circle-avatar'

export const UserItem = ({ user, click }) => {
    console.log('user item rendered')
    return (
        <UserItemWrap onClick={() => click(user)}>
            <ChatListItemAvatarWrap>
                <CircleAvatar src={user.avatar} size={30} />
            </ChatListItemAvatarWrap>
            <UserItemInfoWrap>
                <UserName>{user.username}</UserName>
            </UserItemInfoWrap>
        </UserItemWrap>
    )
}

import { Avatar, AvatarWrap } from './circle-avatars.styles'

export const CircleAvatar = ({ src, size }) => {
    return (
        <AvatarWrap size={size}>
            <Avatar src={src} size={size} />
        </AvatarWrap>
    )
}

import { TransparentContainer } from '../../../transparent-container/transparent-container.styles'
import {
    ProfileBioLabel,
    ProfileSettingsHeader,
    ProfileSettingsWrap,
    UserProfileAvatar,
    UserProfileEmail,
    UserProfileName,
    UserProfileWrap,
} from '../profile-settings/profile-settings.styles'
import { CircleAvatar } from '../../circle-avatar/circle-avatar'
import { useSelector } from 'react-redux'

export const UserInfo = ({ handleClose }) => {
    const user = useSelector((state) => state.user.selectedUser)

    return (
        <TransparentContainer onClick={handleClose}>
            <ProfileSettingsWrap>
                <ProfileSettingsHeader>Info</ProfileSettingsHeader>
                <UserProfileWrap>
                    <UserProfileAvatar>
                        <CircleAvatar
                            size={100}
                            src={user.avatar}
                        ></CircleAvatar>
                    </UserProfileAvatar>
                    <UserProfileName>{user.username}</UserProfileName>
                    <UserProfileEmail>{user.email}</UserProfileEmail>
                </UserProfileWrap>
                <ProfileBioLabel>{user.bio}</ProfileBioLabel>
            </ProfileSettingsWrap>
        </TransparentContainer>
    )
}

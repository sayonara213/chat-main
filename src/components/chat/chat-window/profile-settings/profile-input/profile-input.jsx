import {
    ProfileInputField,
    ProfileInputIcon,
    ProfileInputIconWrap,
    ProfileInputPlaceholderWrap,
    ProfileInputText,
    ProfileInputWrap,
} from './profile-input.styles'
import { IMAGES } from '../../../../../constants/images'

export const ProfileInput = ({
    icon,
    value,
    onchange,
    placeholder,
    text,
    name,
}) => {
    return (
        <ProfileInputWrap>
            <ProfileInputPlaceholderWrap>
                <ProfileInputIcon src={icon} />
                <ProfileInputText>{text}</ProfileInputText>
            </ProfileInputPlaceholderWrap>
            <ProfileInputField
                onChange={onchange}
                placeholder={placeholder}
                value={value}
                name={name}
                type={name === 'password' ? 'password' : 'text'}
            ></ProfileInputField>
        </ProfileInputWrap>
    )
}

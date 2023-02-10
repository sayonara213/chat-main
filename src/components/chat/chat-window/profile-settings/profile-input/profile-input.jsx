import {
    ProfileInputField,
    ProfileInputIcon,
    ProfileInputPlaceholderWrap,
    ProfileInputText,
    ProfileInputWrap,
    SubmitButton,
    SubmitButtonWrap,
} from './profile-input.styles'
import { IMAGES } from '../../../../../constants/images'
import { useEffect, useState } from 'react'

export const ProfileInput = ({
    icon,
    value,
    onchange,
    placeholder,
    text,
    name,
    onsubmit,
}) => {
    const [showSubmit, setShowSubmit] = useState(false)

    useEffect(() => {
        if (value.length > 0) {
            setShowSubmit(true)
        } else {
            setShowSubmit(false)
        }
    }, [value])

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
            {showSubmit && (
                <SubmitButtonWrap>
                    <SubmitButton src={IMAGES.check} onClick={onsubmit} />
                </SubmitButtonWrap>
            )}
        </ProfileInputWrap>
    )
}

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

    const handleSubmit = () => {
        if (value.length > 0) {
            onsubmit()
            setShowSubmit(false)
        }
    }

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
                autoComplete={'off'}
            ></ProfileInputField>
            {showSubmit && (
                <SubmitButtonWrap>
                    <SubmitButton src={IMAGES.check} onClick={handleSubmit} />
                </SubmitButtonWrap>
            )}
        </ProfileInputWrap>
    )
}

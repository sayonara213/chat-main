import styled from 'styled-components'

export const ProfileSettingsWrap = styled.div`
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    background-color: ${(props) => props.theme.color.dark};

    border-radius: 10px;
`

export const ProfileSettingsHeader = styled.h1`
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 500;
    color: ${(props) => props.theme.color.text};
    font-family: 'regular', sans-serif;
    margin-bottom: 10px;
`

export const UserProfileWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`

export const UserProfileAvatar = styled.div`
    margin-bottom: 10px;
    position: relative;
`

export const ChangeAvatarWrap = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.secondary};
    cursor: pointer;
    border: 3px solid ${(props) => props.theme.color.dark};
`

export const ChangeAvatarButton = styled.input`
    width: 20px;
    height: 20px;
`

export const UserProfileName = styled.p`
    margin-bottom: 5px;
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 500;
    color: ${(props) => props.theme.color.text};
    font-family: 'regular', sans-serif;
`

export const UserProfileEmail = styled.p`
    margin-bottom: 2px;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 200;
    color: ${(props) => props.theme.color.textSecondary};
    font-family: 'regular', sans-serif;
`

export const UserProfileForm = styled.form`
    width: 100%;
`

export const UserInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`

export const InfoInputWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const ProfileBioWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 10px 0;
`

export const ProfileBioInput = styled.div`
    max-height: 60px;
    max-width: 100%;
    width: 100%;

    textarea {
        padding: 0;
        max-height: 60px;
        white-space: pre-line;
        border: none;
        outline: none;
        width: 100%;
        background-color: transparent;
        color: ${(props) => props.theme.color.text};
        font-size: ${(props) => props.theme.fontSize.small};
        font-family: 'regular', sans-serif;
        resize: none;
        overflow: auto;

        &::placeholder {
            color: ${(props) => props.theme.color.textSecondary};
        }

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: ${(props) => props.theme.color.secondary};
        }
    }
`

export const ProfileBioLabel = styled.label`
    text-align: center;
    width: 200px;
    margin: 5px 0;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 200;
    color: ${(props) => props.theme.color.textSecondary};
    font-family: 'regular', sans-serif;
`
export const InputSubmit = styled.button`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.text};
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 500;
    font-family: 'regular', sans-serif;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${(props) => props.theme.color.secondary};
    }
`

export const MaxCharLabel = styled.p`
    text-align: center;
    width: 200px;
    margin: 5px 0;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 300;
    color: ${(props) => props.theme.color.textSecondary};
    font-family: 'regular', sans-serif;
`

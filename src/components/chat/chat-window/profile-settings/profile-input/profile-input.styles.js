import styled from 'styled-components'

export const ProfileInputWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    flex-direction: row;
    justify-content: space-between;
`

export const ProfileInputPlaceholderWrap = styled.div`
    display: flex;
    align-items: center;
`

export const ProfileInputIcon = styled.img`
    margin-right: 10px;

    width: 25px;
    height: 25px;
`

export const ProfileInputText = styled.p`
    width: 100px;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 500;
    color: ${(props) => props.theme.color.text};
    font-family: 'regular', sans-serif;
`

export const ProfileInputField = styled.input`
    all: unset;
    width: 100%;

    text-align: right;
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.color.text};
    font-family: 'regular', sans-serif;

    &::placeholder {
        color: ${(props) => props.theme.color.text};
    }
`
